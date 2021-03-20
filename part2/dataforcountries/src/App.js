import axios from 'axios';
import {useState, useEffect} from 'react';

import Content from './component/content'

function App() {
  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [show, setShow] = useState('')

  useEffect(() => {    
    
    axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
      setCountries(response.data)
    })

  }, [])


  const handleChange = (e) => {
    
    const val = e.target.value
    setCountry(val)
    setCountries(countries.filter(c => c.name.includes(val)))
  }


  console.log(countries)
  // const countriesToShow = country ===  '' ? [] : countries.filter(c => c.name.includes(country));
  
  return (
    <div className="App">
      <span>Find some countries</span>
      <input name="country" value={country} onChange={handleChange} />
      {countries.length && <Content countries={countries} />}
    </div>
  );
}

export default App;
