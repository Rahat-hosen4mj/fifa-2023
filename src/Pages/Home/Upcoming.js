import React from "react";
import image1 from "../../asset/images/event-3.png";
import image2 from "../../asset/images/summer-celebration.jpg";

const Upcoming = () => {
  return (
    <>
      
     <div className="min-h-screen bg-[#0b4bcb]">
     <h2 className="font-medium text-4xl text-center text-white py-8">Upcoming Event</h2>
        <div className="hero-content flex-col lg:flex-row lg:justify-evenly">
          <div className="card w-full md:w-5/12 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
              <img src={image2} alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body items-start text-start">
              <h2 className="font-bold text-white text-3xl">Ea sports 2022</h2>
              <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipisicing elit. Similique debitis rerum quae.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
  
          <div className="card w-full md:w-5/12 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
              <img src={image1} alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-white text-3xl">Summer-celbration</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia dignissimos, debitis consectetur unde autem distinctio officia</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
