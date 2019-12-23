import React from 'react'
import Note from './Note.js'

const Person = (props) =>{
  return(
    props.persons.map((person) =>{
      if(props.searchName){
        if(person.name.toLowerCase().includes(props.searchName.toLowerCase())){
          // console.log('match')
          return(<Note key={person.id} person={person} />)
        }
        else{
          return null
        }
      }
      else{
        // console.log('no-match')
        return(<Note key={person.id} person={person} />)
      }
    }
    )
  )
}

export default Person
