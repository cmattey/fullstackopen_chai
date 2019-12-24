import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryList from './CountryList.js'

const App = () => {

  const [countries, setNewCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    console.log('Retrieving all countries')
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name')
      .then(response=>{
        console.log("Successfully retrieved")
        setAllCountries(response.data)
      })
  }, [])

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value)
    setNewCountries(allCountries.filter(country=>country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }
  console.log('Search Matched: ', countries.length, ' countries')

  return (
    <div>
      <h3>Search countries</h3>
      <div>
        Find country: <input value={searchQuery} onChange={handleQueryChange}/>
      </div>

      <div>
      <h4>Results</h4>
      </div>
      <CountryList countries={countries}/>
    </div>
  )

}

export default App;
