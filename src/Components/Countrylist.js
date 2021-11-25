import CountrySelector from "./CountrySelector";

const CountryList = ({ countries, onClick, onCheck }) => {

    const countryList = countries.map(country => {
        return(
            
            <div>
                <CountrySelector name={country.name.common} onClick={onClick} onCheck={onCheck} />
                
            </div>
        )
    }) 
    
    return(
        <div className="CountryList">
            {countryList}
        </div>
    )
}

export default CountryList; 