import React from "react";

const CountryModal = ({ countryName }) => {
    const {name, flags, capital,continents} = countryName;
  console.log(countryName);
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div class="card min-w-full  bg-base-100 shadow-xl image-full">
            <figure className="h-64">
              <img src={flags.png} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name.common}</h2>
              <p>Capital : {capital[0]} <br /> continents : {continents[0]}</p>
             
              <label htmlFor="my-modal-6" className="btn btn-primary btn-sm w-32">
            close
          </label>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
