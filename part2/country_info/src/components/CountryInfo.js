import React,{useState, useEffect} from 'react'
import axios from 'axios'

const CountryInfo = ({country}) =>{

  const [countryInfo, updateCountryInfo] = useState('')

  useEffect(()=>{
    console.log('Retrieving specific country info')
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country.name}?fullText=true`)
      .then(response=>{
          console.log('Promise fullfilled to one country')
          updateCountryInfo(response.data)
      })
  }, [country])
// https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  if(countryInfo.length>0){
    console.log('Info', countryInfo)
    return(
      <div>
        <h3>{countryInfo[0].name}</h3>
        Capital: {countryInfo[0].capital}<br/>
        Languages:
        <ul>
          {countryInfo[0].languages.map(lang=> <li key={lang.name}>{lang.name}</li>)}
        </ul>
        <img src={countryInfo[0].flag} alt='Flag logo' height="150"/>
      </div>
    )
  }
  else{
    return <div></div>
  }

}

export default CountryInfo
