import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Statistic = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stat = ({stat_obj}) => {
  let good = stat_obj["good"]
  let neutral = stat_obj["neutral"]
  let bad = stat_obj["bad"]

  let total = good+neutral+bad
  let average = (good-bad)/total
  let positive_percent = (good/total)*100

  if (good===0 && neutral===0 && bad===0){
    return <div>No feedback given</div>
  }
  else{
    return (
      <div>
      <table>
        <tbody>
        <Statistic text = "Good" value = {good}/>
        <Statistic text = "Neutral" value = {neutral}/>
        <Statistic text = "Bad" value = {bad}/>
        <Statistic text = "Average" value = {average}/>
        <Statistic text = "Positive Percent" value = {positive_percent}/>
        </tbody>
      </table>
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
          <Stat stat_obj={{"good":good,"neutral":neutral,"bad":bad}}/>
        </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
