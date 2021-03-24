import React, { useState } from 'react';


const Button = (props) => {
  return(
    <button onClick={props.randomize}>Give me a Random Quote</button>
  )
}

const App = () => {


  const handleClick = (props) => {
    // console.log(Math.floor(Math.random() * Math.floor(anecdotes.length-1)))
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length-1)))
}

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}<br /><br />
      <Button randomize={handleClick} number={selected} />
    </div>
  )
}

export default App;