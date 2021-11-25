import CountrySelector from "./CountrySelector"

const VisitedCountryList = ({ countries, onClick }) =>{
    
    const countryList = countries.map(country => {
        return (
                <div>
                    <CountrySelector name={country.name.common} onClick={onClick} />
                </div>
        )   
    }) 
    
    return(
        <div className="CountryList">
            {countryList}
        </div>
    )

}

export default VisitedCountryList;