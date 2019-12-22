import React, { useState } from 'react'
import Note from './Note.js'

const App = () => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas', number:1234},
    {name:'Jeff Goldblum', number:789},
    {name:'PewDiePie', number:420}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setNewSearch] = useState('')

  const rows = () => persons.map((person) =>{
    if(searchName){
      if(person.name.toLowerCase().includes(searchName.toLowerCase())){
        console.log('match')
        return(<Note key={person.name} person={person} />)
      }
      else{
        return null
      }
    }
    else{
      console.log('no-match')
      return(<Note key={person.name} person={person} />)
    }
  }
  )

  const addInfo = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

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
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
        Filter contacts:
        <input value={searchName}
              onChange={handleSearchChange}/>
        </div>

      <h3>Add New</h3>
      <form onSubmit={addInfo}>
        <div>
          name: <input
                value={newName}
                onChange={handleNameChange}/>
        </div>
          number: <input
                  value = {newNumber}
                  onChange={handleNumChange}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <div>debug: {newName}</div> */}
        {rows()}
    </div>
  )
}

export default App
