const CountryInfo = ({ countryData }) => {

    return(
    <div className= "CountryInfo">
        <h3>Country Name: {countryData.name}</h3>
        <h3>Capital City: {countryData.capital}</h3>
        <h3>Currency: {countryData.currencies}</h3>
        <h3>Population: {countryData.population}</h3>
        <h3>Flag: {countryData.flags}</h3>
        <h3>Google Maps: {countryData.maps}</h3>
    </div>)
}

export default CountryInfo; 