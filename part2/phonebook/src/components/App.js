import React, { useState } from 'react'
import Note from './Note.js'

const App = () => {
  const [ persons, setPersons] = useState([
    'Arto Hellas'
  ])
  const [ newName, setNewName ] = useState('')


  const rows = () => persons.map(person =>
    <Note key={person} person={person} />
  )

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    if(persons.includes(newName)){
      console.log("duplicate")
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(newName))
    }

    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
                value={newName}
                onChange={handleNameChange}/>
        </div>
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
