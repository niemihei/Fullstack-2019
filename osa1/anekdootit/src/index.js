import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [popular, setPopular] = useState(0)
  const [votes, setVotes] = useState({
    apu: Array(props.anecdotes.length).fill(0)
  })

  const handleVotes = () => {
    const newVote = {...votes.apu}
    newVote[selected] ++;
    setVotes({apu: newVote})
    mostPopular()
  } 
  const mostPopular = () => {
    let ind = 0
    let suurin = 0
    for (ind = 0; ind < props.anecdotes.length; ind = ind + 1) {
      if (votes.apu[ind] > votes.apu[suurin]) { suurin = ind }
    }
    setPopular(suurin)
  }

  return (
    <div>
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}
        <p>{'has '} {votes.apu[selected]} {' votes'} </p>
      </div>
      <div>
        <Button handleClick={() => {
          setSelected(Math.floor(Math.random() * props.anecdotes.length) + 0)
          mostPopular()
          }} text="next anecdote" />  
      </div>
      <div>
        <Button handleClick={() =>  {
          handleVotes()
          }} text="votes" />  
      </div> 
      <div>
        <h3>Anecdote with most votes</h3>
        {props.anecdotes[popular]}
        <p>{'has '} {votes.apu[popular]} {' votes'} </p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
