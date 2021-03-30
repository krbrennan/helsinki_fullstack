import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import API service functions
import apiService from './services/numbers'

// component imports
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ]) 

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const [ searchName, setSearchName ] = useState('')
  const [ filteredNames, setFilteredNames] = useState([])





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
  
  


  // search Names
  const handleFilterChange = (event) => {
      // needs access to persons
      setSearchName(event.target.value)
  }

  const submitSearch = (event) => {
    event.preventDefault()
    setSearchName(searchName)

    const filtered = persons.filter((person) => {
      // person.name
      return person.name.toLowerCase().includes(searchName)
    })

    setFilteredNames(filtered)
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
  
      // setPersons(oldArray => [...oldArray, newPerson])
      // POST to server, update setPersons with response
      apiService.create(newPerson).then((res) => {
        setPersons(oldArray => [...oldArray, res.data])
      })
      setNewName('')
      setNewNumber('')
    }
  }

  // 
  // 
  // 
  // 
  useEffect(() => {
    // apiService.getAll().then(res => setPersons(res))
    apiService.getAll()
      .then(res => setPersons(res))
  }, [])



  return (
    <div>
      <h1>Phonebook</h1>
        <Filter submitSearch={submitSearch} onTextChange={handleFilterChange} />
        <Form 
          submitName={submitName} 
          handleNameChange={handleNameChange} 
          handleNumberChange={handleNumberChange}  
          number={newNumber} 
          name={newName}
          />
      <h2>Numbers:</h2>
        <Persons people={persons} filtered={filteredNames} />
      ...
    </div>
  )
}

export default App