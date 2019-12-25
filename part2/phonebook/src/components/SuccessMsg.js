import React from 'react'

const SuccessMsg = ({message})=>{

    const msgStyle = {
      color: 'green',
      fontStyle: 'italic',
      border: 'solid',
      borderRadius: '5px',
      background:'lightgray'
    }
    if(message){
      return(
        <div style={msgStyle}>{message}</div>
      )
    }
    else{
      return null
    }

}

export default SuccessMsg
