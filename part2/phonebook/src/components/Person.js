import React from 'react'
import Note from './Note.js'
import personUtils from '../services/persons_util.js'

const Person = (props) =>{
  // console.log('person props', props)

  const handlePersonRemoved = (person) => {

    personUtils
      .remove(person.id)
      .then(response => {
        if(response.status===200){
          console.log(`Note with id:${person.name} deleted`)
          // console.log(response)
          props.updatePersons(props.persons.filter(n=> n.id!==person.id))
        }
      })
      .catch(error=>{
        props.setErrorMsg(
          `${person.name} was already removed from Server`
        )
        setTimeout(()=>{
          props.setErrorMsg(null)
        },5000)
        props.updatePersons(props.persons.filter(n=> n.id!==person.id))
      })
  }

  return(
    props.persons.map((person) =>{
      if(props.searchName){
        if(person.name.toLowerCase().includes(props.searchName.toLowerCase())){
          // console.log('match')
          return(<Note key={person.id} person={person} handlePersonRemoved={() => handlePersonRemoved(person)}/>)
        }
        else{
          return null
        }
      }
      else if(props.persons.length>0){
        // console.log('no-match')
        return(<Note key={person.id} person={person} handlePersonRemoved={() => handlePersonRemoved(person)}/>)
      }
      else{
        return(<div></div>)
      }
    }
    )
  )
}

export default Person
