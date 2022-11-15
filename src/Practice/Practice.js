import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Practice = () => {
  // const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <div className="drawer drawer-mobile border border-3 border-red-400">
        <input id="sideBar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col"><label
            htmlFor="sideBar"
            className="btn btn-primary drawer-button lg:hidden"
          >
          OpenSidebar
          </label>

        <h2 className="text-3xl text-purple-500 ml-5">This is Dashboard</h2>
        <div className="px-5">
        <Outlet></Outlet>
        </div>
          {/* <!-- Page content here --> */}
         
        </div>
        <div className="drawer-side border border-5 border-green-500">
          <label htmlFor="sideBar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/practice'>Meal Db</Link>
            </li>
            <li>
              <Link to='/practice/allUser'>All User</Link>
            </li>
            <li>
              <Link to='/practice/dayPicker'>Day Picker</Link>
            </li>
            <li>
            <Link to='/practice/restCountries'>RestCountries</Link>
            </li>
            <li>
            <Link to='/practice/restApi'>RestApi</Link>
            </li>
            <li>
            <Link to='/practice/filter'>Filter</Link>
            </li>
            <li>
            <Link to='/practice/imgCroper'>Img Croper</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Practice;
