import React, { useState } from 'react'


const Persons = (props) => {
  // console.log(props)
  return(
    props.people.map((person, idx) => {
        return <p key={idx}>{person.name}    {person.number} </p> 
    })
  )
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',  number: '123-456-7890'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')





  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  const nameTaken = (name) => {
    // search persons, if this name is already in persons return true, else return false
    let alreadyExists = false

    persons.forEach((person) => {
      if(person.name.includes(name)){
        alreadyExists = true
      }
    })
    return alreadyExists
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const submitName = (event) => {
    event.preventDefault()

    if(nameTaken(newName, persons)) {
      return alert(`${newName} is already taken!`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
  
      setPersons(oldArray => [...oldArray, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }





  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>number: <input onChange={handleNumberChange} value={newNumber} /></div>
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