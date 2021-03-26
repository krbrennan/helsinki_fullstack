import React, { useState } from 'react'


const Persons = (props) => {
  // console.log(props)
  return(
    props.people.map((person, idx) => {
      return <p key={idx}>{person.name}</p>
    })
  )
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')





  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }




  const submitName = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName
    }

    // console.log('new person:', newPerson)

    setPersons(oldArray => [...oldArray, persons.push(newPerson)])
    setNewName('')

  }





  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers:</h2>
        <Persons people={persons}/>
      ...
    </div>
  )
}

export default App