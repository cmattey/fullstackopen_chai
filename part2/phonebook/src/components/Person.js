import React from 'react'
import Note from './Note.js'
import personUtils from '../services/persons_util.js'

const Person = (props) =>{
  // console.log('person props', props)

  const handlePersonRemoved = (id) => {

    personUtils
      .remove(id)
      .then(response => {
        if(response.status===200){
          console.log(`Note with id:${id} deleted`)
          // console.log(response)
        }
        else{
          console.log(`Could not delete resource with id:${id}`)
        }
      })
    props.updatePersons(props.persons.filter(n=> n.id!==id))
  }

  return(
    props.persons.map((person) =>{
      if(props.searchName){
        if(person.name.toLowerCase().includes(props.searchName.toLowerCase())){
          // console.log('match')
          return(<Note key={person.id} person={person} handlePersonRemoved={() => handlePersonRemoved(person.id)}/>)
        }
        else{
          return null
        }
      }
      else if(props.persons.length>0){
        // console.log('no-match')
        return(<Note key={person.id} person={person} handlePersonRemoved={() => handlePersonRemoved(person.id)}/>)
      }
      else{
        return(<div></div>)
      }
    }
    )
  )
}

export default Person
