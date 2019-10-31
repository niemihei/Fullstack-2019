import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <div>
        <h3>
          <p>{'statistics'}</p>
        </h3>
        <p>{'no feedback given'}</p>
      </div>
    )
  }
  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  let average = (props.good - props.bad)/(total)
  average = round(average, 1)
  let positive = (100  *  (props.good /(total)))
  positive = round(positive, 1)
  positive = positive + ' %'
  return (
    <div>
      <h3>
        <p>{'statistics'}</p>
      </h3>
      <table>
      <Statistic text="good" value ={props.good} />
      <Statistic text="neutral" value ={props.neutral} />
      <Statistic text="bad" value ={props.bad} />
      <Statistic text="total" value ={total} />
      <Statistic text="average" value ={average} />
      <Statistic text="positive" value ={positive} />
      </table>
    </div>
  )
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  /* tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) */
  
  return (
    <div>
        <div>
          <h2>
            <p>{'give feedback'}</p>
          </h2>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

            <div>
              <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        </div>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)