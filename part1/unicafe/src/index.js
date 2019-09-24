import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Stat = ({text, value}) => {
  if (isNaN(value)){
    value = "Enter Feedback to calculate "+text
  }
  return (
    <div>
      <div>{text}: {value}</div>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const handleClick = (func, value) => () => {
    func(value)
  }

  return (
    <div>
      <h2>Provide Feedback</h2>
      <div>
        <Button handleClick={handleClick(setGood,good+1)} text="Good" />
        <Button handleClick={handleClick(setNeutral,neutral+1)} text="Neutral" />
        <Button handleClick={handleClick(setBad,bad+1)} text="Bad" />
        </div>
        <h3>Statistics</h3>
        <div>
          <Stat text="Good" value={good}/>
          <Stat text="Neutral" value={neutral}/>
          <Stat text="Bad" value={bad}/>
          <Stat text="All" value={total}/>
          <Stat text="Average" value={(good+bad*(-1))/total}/>
          <Stat text="Positive Percentage" value={good/total}/>
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
