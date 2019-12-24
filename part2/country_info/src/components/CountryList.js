import React from 'react'
import CountryInfo from './CountryInfo.js'

const CountryList = ({countries, searchQuery}) => {
  console.log(countries)
  if(countries.length>10){
    return <div>Too many matches, specify further</div>
  }
  else if(countries.length===1){
    return <CountryInfo country={countries[0]}/>
  }
  else if (countries.length===0){
    return <div>No matches found</div>
  }
  else{
    return(
      countries.map(country =>{
          return(<div key={country.name}>>{country.name}</div>)
        }
      )
    )
  }
}

export default CountryList
