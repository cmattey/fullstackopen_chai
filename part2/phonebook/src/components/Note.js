import React from 'react'

const Note = ({person, deleteNote, handlePersonRemoved}) => {
  // console.log('Inside Note', person)

  const confirmDeletion = () =>{
    const result = window.confirm(`Delete ${person.name}?`)
    if(result){
      return handlePersonRemoved()
    }
  }

  return (
    <div>
      {person.name}: {person.number}
      <button onClick={confirmDeletion}>delete</button>
    </div>
  )
}

export default Note
