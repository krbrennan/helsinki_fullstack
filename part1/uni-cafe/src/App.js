import React, { useState } from 'react';



const Button = (props) => {
  return(
    <button onClick={props.handleClick()}>{props.text}</button>
  )
}


const Statistic = (props) => {
  return(
    <p>{props.text}: {props.value}</p>
  )
}

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Statistics</h1>
      <table>
       
        <tr><Statistic text="good" value={props.good} /> </tr>
        <tr><Statistic text="neutral" value={props.neutral} /></tr>
        <tr><Statistic text="bad" value={props.bad} /> </tr>
        <tr><Statistic text="total" value={props.total} /> </tr>
        <tr><Statistic text="positive" value={ (props.good / props.total) * 100} /> </tr>
        <tr>Average: { props.total ? (((Math.abs(props.good - props.bad)) / props.total) * 100) + "%" : "No Feedback Given" } </tr>
        
      </table>
    </div>
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

    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
  </div>
  );
}

export default App;
