import React from "react";
import banner from '../../asset/images/banner.png'

const HomeBanner = () => {
  return (
    <div className="w-100 min-h-screen  grid md:grid-cols-2 p-8 md:px-14 bg-[#0b4bcb]">
      <div className="mb-8 md:mb-0">
        <h2 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
          Conmebol <br /> copa america <br /> 2022
        </h2>
        <button class="btn btn-secondary mt-10">Watch Live</button>
      </div>
      <div className="w-full md:max-w-lg" >
        <img className=""  src={banner} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
