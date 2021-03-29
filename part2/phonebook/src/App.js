import React, { useState } from 'react'


const Persons = (props) => {
  // console.log(props)

  console.log(props.filtered)

  if(props.filtered.length > 0) {
    return(
      props.filtered.map((person, idx) => {
        return <p key={idx}>{person.name}    {person.number} </p> 
      })
    )
  } else {
      return(
        props.people.map((person, idx) => {
            return <p key={idx}>{person.name}    {person.number} </p> 
        })
      )
  }
}



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const [ searchName, setSearchName ] = useState('')
  const [ filteredNames, setFilteredNames] = useState('')





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
  // search Names
  // search Names
  // search Names
  // search Names
  const handleFilterChange = (event) => {
      // needs access to persons
      setSearchName(event.target.value)
      // console.log(event.target.value)
  }

  const submitSearch = (event) => {
    event.preventDefault()
    setSearchName(searchName)

    // setfilterednames()
    // filter out persons

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
  
      setPersons(oldArray => [...oldArray, newPerson])
      setNewName('')
      setNewNumber('')
    }
  }





  return (
    <div>
      <h1>Phonebook</h1>
        <form onSubmit={submitSearch}>
          Lookup a name:  <input onChange={handleFilterChange} />
        </form>
      <form onSubmit={submitName}>
        <h2>Add a new Contact</h2>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>number: <input onChange={handleNumberChange} value={newNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers:</h2>
        <Persons people={persons} filtered={filteredNames} />
      ...
    </div>
  )
}

export default App