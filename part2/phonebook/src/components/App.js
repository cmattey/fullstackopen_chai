import React, { useState } from 'react'
import Note from './Note.js'

const App = () => {
  const [ persons, setPersons] = useState([
    {name:'Arto Hellas', number:1234}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const rows = () => persons.map(person =>
    <Note key={person.name} person={person} />
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

  return (
    <div>
      <h2>Phonebook</h2>
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
