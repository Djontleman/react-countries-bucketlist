import { useState, useEffect } from 'react';
import CountryList from "../Components/CountryList";
import CountryInfo from "../Components/CountryInfo";


const CountryListContainer = () => {

  const [countries, setCountries] = useState([]);

    // const countries = ["Japan", "Bosnia", "China", "Canada"]
    
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))    
    }, [])
    
    const countryData = {
      "name": "Japan",
      "capital": "Tokyo",
      "currencies": "yen",
      "population": 125836021,
      "flags": "flag",
      "maps": "GoogleMaps"
  }
  
    return (
      <div className="CountryListContainer">
        <CountryList countries={countries}/>
        <CountryInfo countryData={countryData}/>
      </div>
    );
}

export default CountryListContainer