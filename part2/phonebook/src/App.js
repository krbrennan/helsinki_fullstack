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


  const submitName = (event) => {
    event.preventDefault()

    if(nameTaken(newName, persons)) {
      return alert(`${newName} is already taken!`)
    } else {
      const newPerson = {
        name: newName
      }
  
      setPersons(oldArray => [...oldArray, newPerson])
      setNewName('')
    }
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