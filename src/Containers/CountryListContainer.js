import { useState, useEffect } from 'react';
import CountryList from "../Components/CountryList";
import CountryInfo from "../Components/CountryInfo";
import VisitedCountryList from '../Components/VisitedCountries';


const CountryListContainer = () => {

  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => data.map(country => ({ ...country, visited: false })))
      .then(data => setCountries(data))          
  }, [])
    
  const updateCountryData = (name) => {
    const selectedCountry = countries.find(country => country.name.common === name)
    setCountryData(selectedCountry)
    console.log(selectedCountry)
  }

  const updateIsVisited = (name, checked) => {
    for (let country of countries) {
      if (country.name.common === name) {
        country.visited = checked;
      }
    }
    setCountries(countries)
    console.log(countries)
  }
  
  return (
    <div className="CountryListContainer">
        {
          countries.length > 0 ?
          <>
            <CountryList countries={countries} onClick={updateCountryData} onCheck={updateIsVisited}/>

            {
              countryData ?
              <CountryInfo countryData={countryData}/>
              :
              <></>
            }
            
            <VisitedCountryList countries={countries} onClick={updateCountryData}/>
          </>
          :
          <h4>Loading...</h4>
        }
      </div>
    );
}

export default CountryListContainer