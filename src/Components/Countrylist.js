import CountrySelector from "./CountrySelector";

const CountryList = ({ countries, onClick }) => {

    const countryList = countries.map(country => {
        return(
            <CountrySelector name={country.name.common} onClick={onClick}/>
        )
    }) 
    
    return(
        <div className="CountryList">
            {countryList}
        </div>
    )
}

export default CountryList; 