import React from 'react'

const Filter = (props) => {
  return (
    <input value={props.searchName}
          onChange={props.handleSearchChange}/>
  )
}

export default Filter
