const CountrySelector = ({ name, onClick }) => {

    // const handleClick = (name) => {
    //     onClick(name)
    // }

    return(
        <div className="CountrySelector">
            <button onClick={() => onClick(name)}>{name}</button>
        </div>
    )
}

export default CountrySelector;