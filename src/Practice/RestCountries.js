import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryModal from './CountryModal';
import SingleContry from './SingleContry';

const RestCountries = () => {
     const [countries, setCountries] = useState([]);
     const [countryName, setCountryName] = useState(null)

     useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
     },[])
    
  
    
    
    return (
        <div className="grid md:grid-cols-3 gap-5">
          {
            countries.map(country => <SingleContry
               country={country}
               setCountryName={setCountryName}
               key={country.name.common}></SingleContry>)
          }
         {
          countryName &&  <CountryModal countryName={countryName}></CountryModal>
         }
      </div>
    );
};

export default RestCountries;