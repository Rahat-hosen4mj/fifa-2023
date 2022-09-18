import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItem = (
        <>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
        </>
    )
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navItem}
            </ul>
          </div>
          <a href='www' class="btn btn-ghost font-bold text-2xl text-purple-600">FIFA-2023</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">
          {navItem}
          </ul>
         
        </div>
        {/* <div class="navbar-end">
          <a href='www' class="btn">Get started</a>
        </div> */}
      </div>
     
    </>
  );
};

export default Navbar;
