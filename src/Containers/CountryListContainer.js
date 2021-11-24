import { useState, useEffect } from 'react';
import CountryList from "../Components/CountryList";
import CountryInfo from "../Components/CountryInfo";


const CountryListContainer = () => {

  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
            
    }, [])
    
    const tempCountryData = {
      "name.common": "Japan",
      "capital": "Tokyo",
      "currencies": "yen",
      "population": 125836021,
      "flags": "flag",
      "maps.googleMaps": "GoogleMaps"
  }

  const updateCountryData = (name) => {

    const selectedCountry = countries.find(country => country.name.common === name)
    setCountryData(selectedCountry)
    console.log(selectedCountry)
  }
  
    return (
      <div className="CountryListContainer">
        {
          countries.length > 0 ?
          <>
            <CountryList countries={countries} onClick={updateCountryData}/>

            {
              countryData ?
              <CountryInfo countryData={countryData}/>
              :
              <></>
            }
            
          </>
          :
          <h4>Loading...</h4>
        }
      </div>
    );
}

export default CountryListContainer