import React from 'react'
import Note from './Note.js'

const Person = (props) =>{
  console.log('person props', props)
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
      else if(props.persons.length>0){
        // console.log('no-match')
        return(<Note key={person.id} person={person} />)
      }
      else{
        return(<div></div>)
      }
    }
    )
  )
}

export default Person
