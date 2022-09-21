import React from "react";
import fifa from "../../asset/images/fifa.jpg";

const AboutHome = () => {
  return (
    
      <div className="hero min-h-screen bg-[#f1f1f1] py-8 md:py-0 px-6 md:px-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={fifa} className="w-full md:max-w-lg rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl leading-tight font-bold text-[#4169e1]">
              About Fifa <br /> 2023
            </h1>
            <p className="py-6 pr-4 md:pr-16 text-[#252628] ">
              The 2022 FIFA World Cup is scheduled to be the 22nd running of the
              FIFA World Cup competition, the quadrennial international men's
              football championship contested by the national teams of the
              member associations of FIFA <br /> Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quae illo voluptatum molestias cum
              asperiores accusamus eligendi eum minus! Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Nostrum exercitationem ad
              reiciendis dolores, aperiam praesentium labore architecto?
              Expedita hic ut animi est!
            </p>
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
  
  );
};

export default AboutHome;
