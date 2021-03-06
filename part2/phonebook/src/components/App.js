import React, { useState, useEffect } from 'react'
import PersonForm from './PersonForm.js'
import Person from './Person.js'
import Filter from './Filter.js'
import SuccessMsg from './SuccessMsg.js'
import ErrorMsg from './ErrorMsg.js'
import personUtils from '../services/persons_util.js'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setNewSearch] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
// Effect hook
// If the second parameter is an empty array [],
// then the effect is only run along with the first render of the component.
  useEffect(() => {
    console.log('effect')
    personUtils
      .getAll()
      .then(allData =>{
        console.log('promise fulfilled')
        setPersons(allData)
      })
  }, [])
  console.log('render', persons.length, 'contacts')

  const displaySuccessNotification = (personObj) =>{
    setSuccessMsg(`${personObj.name} was successfully added`)
    setTimeout(()=>{
      setSuccessMsg(null)
    },5000)
  }

  const addInfo = (event) => {
    event.preventDefault()
    console.log(event.target)
    const names = persons.map(person => person.name)

    if(names.includes(newName)){
      console.log("duplicate found")
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      const personObj = {name:newName,
                      number:newNumber}
      personUtils
        .create(personObj)
        .then(newData=>{
          setPersons(persons.concat(newData))
        })

      displaySuccessNotification(personObj)

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
    // Can we set a local variable here, to avoid re-rendering everytime, change
    // is made to the form input (since this functinality is different from Search,
    // where constant re-rendering makes sense)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessMsg message={successMsg}/>
      <ErrorMsg message={errorMsg}/>
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
                searchName = {searchName}
                updatePersons = {setPersons}
                setErrorMsg = {setErrorMsg}/>
    </div>
  )
}

export default App
