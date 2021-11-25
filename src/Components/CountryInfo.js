const CountryInfo = ({ countryData }) => {

    return(
    <div className= "CountryInfo">
        <h3>Country Name: {countryData.name.common}</h3>
        <h3>Capital City: {countryData.capital[0]}</h3>
        <h3>Currency: {Object.keys(countryData.currencies)[0]}</h3>
        <h3>Population: {countryData.population}</h3>
        <h3>Flag: {countryData.flag}</h3>
        <h3>Google Maps: {countryData.maps.googleMaps}</h3>
    </div>)
}

export default CountryInfo; 