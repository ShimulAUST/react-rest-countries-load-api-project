import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    return (
        <div className='country'>
            <h4>Name: {name}</h4>
            <img src={flag} alt="flag" height="50px" />
            <p>Capital: {capital}</p>
            <p><small>Region:{region}</small></p>
            <p>Population: {population}</p>

        </div>
    );
};

export default Country;