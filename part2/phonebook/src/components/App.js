import React, { useState } from 'react'
import PersonForm from './PersonForm.js'
import Person from './Person.js'
import Filter from './Filter.js'

const App = () => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas', number:1234},
    {name:'Jeff Goldblum', number:789},
    {name:'PewDiePie', number:420}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setNewSearch] = useState('')

  const addInfo = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)

    const names = persons.map(person => person.name)

    if(names.includes(newName)){
      console.log("duplicate")
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObj = {name:newName,
                      number:newNumber}

      setPersons(persons.concat(personObj))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Filter contacts:</h3>
      <Filter searchName = {searchName}
              handleSearchChange = {handleSearchChange}/>

      <h3>Add New</h3>
      <PersonForm addInfo = {addInfo}
                  newName = {newName}
                  handleNameChange = {handleNameChange}
                  newNumber = {newNumber}
                  handleNumChange = {handleNumChange}
                  />

      <h3>Contacts</h3>
        <Person persons = {persons}
                searchName = {searchName}/>
    </div>
  )
}

export default App
