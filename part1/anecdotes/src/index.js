import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = (props) => {

  const arrLength = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [voteArray, updateVoteArray] = useState(new Array(arrLength).fill(0))

  const getRandomIndex = () => {
    setSelected(Math.floor(Math.random()*arrLength))
  }

  const castVote = () => {
    const copyArr = [...voteArray]
    copyArr[selected]+=1
    updateVoteArray(copyArr)
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <p>has {voteArray[selected]} votes</p>
      <Button handleClick={getRandomIndex} text="next anecdote"/>
      <Button handleClick={castVote} text="vote"/>
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
