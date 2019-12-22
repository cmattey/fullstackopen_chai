import React from 'react'

const PersonForm = (props) => {

  return (
    <form onSubmit={props.addInfo}>
      <div>
        name: <input
              value={props.newName}
              onChange={props.handleNameChange}/>
      </div>
        number: <input
                value = {props.newNumber}
                onChange={props.handleNumChange}/>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


export default PersonForm
