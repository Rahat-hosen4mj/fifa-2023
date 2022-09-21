import React from "react";
import footerLogo from "../../asset/images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-white min-h-56 flex flex-col items-center justify-center pt-12">
        <div className="w-9/12 md:max-w-md">
          <figure>
            <img src={footerLogo} alt="" />
          </figure>
        </div>
        <div>
          <div className="pt-3">
            <i className="fa-brands fa-instagram text-[#bc2a8d] text-4xl px-2 md:px-4"></i>
            <i className="fa-solid fa-basketball text-4xl px-2 md:px-4 "></i>
            <i className="fa-brands fa-twitter text-blue-500 text-4xl px-2 md:px-4"></i>
            <i className="fa-brands fa-youtube text-red-500 text-4xl px-2 md:px-4"></i>
          </div>
          <div className="text-center mt-5 text-violet-500">
           <p>All Right Reserved by <br />
           <i class="fa-solid fa-copyright"></i> Rahat hosen</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
