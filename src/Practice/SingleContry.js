import React from 'react';

const SingleContry = ({country, setCountryName}) => {
    const {name, flags, area} = country;

    // const countryInfo = (name) =>{
    //     fetch(`https://restcountries.com/v3.1/name/${name}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data[0].name.common))
    // }
    return (
      <>
        <div className="card max-w-sm bg-base-100 shadow-xl max-h-auto">
        <figure><img src={flags.png} alt="countryFlag" /></figure>
        <div className="card-body">
          <h2 className="card-title ">Name: {name.common}</h2>
          <p className='card-actions items-end'>Area : {area}</p>
          <div className="card-actions justify-end">
            {/* <button onClick={() => countryInfo(name.common)} className="btn btn-primary">More Info</button> */}
            <label  onClick={() => setCountryName(country)} htmlFor="my-modal-6" class="btn btn-primary">More Info</label>
          </div>
        </div>
      </div>
      
      </>
    );
};

export default SingleContry;