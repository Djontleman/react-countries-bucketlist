import CountrySelector from "./CountrySelector";

const CountryList = ({ countries }) => {

    const countryList = countries.map(country => {
        return(
            <CountrySelector name = {country.name.common} />
        )
    }) 
    
    return(
        <div>
            {countryList}
        </div>
    )
}

export default CountryList; 