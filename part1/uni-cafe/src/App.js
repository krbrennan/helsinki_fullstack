import React, { useState } from 'react';



const Button = (props) => {
  return(
    <button onClick={props.handleClick()}>{props.text}</button>
  )
}



function App() {

  // state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // handle clicks
  const incrementGood = (props) => {
    setGood(good + 1)
    setTotal(total+1)
  }

  const incrementNeutral = (props) => {
    setNeutral(neutral + 1)
    setTotal(total+1)
  }

  const incrementBad = (props) => {
    setBad(bad + 1)
    setTotal(total+1)
  }

  return (
  <div>
    <h1>Give Feedback</h1>
    <Button handleClick={ () => incrementGood} text='good' />
    <Button handleClick={ () => incrementNeutral} text='neutral' />
    <Button handleClick={ () => incrementBad} text='bad' />

    <h1>Statistics</h1>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Average: { total ? ((good / total) * 100) : 0 } %</p>
  </div>
  );
}

export default App;
