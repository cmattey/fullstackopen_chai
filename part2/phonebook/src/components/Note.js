import React from 'react'

const Note = ({person}) => {
  console.log('Inside Note', person)
  return (
    <div>
      {person.name}: {person.number}
    </div>
  )
}

export default Note
