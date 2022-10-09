import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleContry from './SingleContry';

const RestCountries = () => {
     const [countries, setCountries] = useState([]);

     useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
     },[])
    
  
    
    
    return (
        <div className="grid md:grid-cols-3 gap-5">
          {
            countries.map(country => <SingleContry country={country} key={country.name.common}></SingleContry>)
          }
      </div>
    );
};

export default RestCountries;