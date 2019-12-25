import React from 'react'

const ErrorMsg = ({message})=>{

    const msgStyle = {
      color: 'red',
      fontStyle: 'bold',
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

export default ErrorMsg
