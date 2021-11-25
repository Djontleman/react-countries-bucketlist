import { useState, useEffect } from 'react';

const CountrySelector = ({ name, onClick, onCheck }) => {

    // const handleClick = (name) => {
    //     onClick(name)
    // }

    const [checked, setChecked] = useState(false);
    // setChecked(false);
    // useEffect(setChecked(false), [])

    
    return(
        <div className="CountrySelector">
            <button onClick={() => onClick(name)}>{name}</button> 
            
            {
                onCheck ?
                <input type="checkbox"
                checked = {checked}
                onChange= {() => {
                        setChecked(!checked)
                        onCheck(name, !checked)
                    }
                }/>
                :
                <></>
            }
        </div>
    )
}

export default CountrySelector;