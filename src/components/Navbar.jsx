import React from "react";
import { FaBullseye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = ({user}) => {
  return (
    <div className="flex h-20 items-center px-6 ">
      <div className="flex gap-2 items-center">
        <NavLink className="flex items-center gap-1" to="/">
          <FaBullseye className="text-2xl text-gray-400" />
          <h1 className="text-xl font-semibold">Tasker</h1>
        </NavLink>
      </div>

      <div className="text-gray-600 flex gap-4 m-10">
        <NavLink to="/product" className="hover:border-b border-gray-600">
          Product
        </NavLink>
        <NavLink to="/solutions" className="hover:border-b border-gray-600">
          Solutions
        </NavLink>
        <NavLink to="/resources" className="hover:border-b border-gray-600">
          Resources
        </NavLink>
        <NavLink to="/entreprise" className="hover:border-b border-gray-600">
          Entreprise
        </NavLink>
        <NavLink to="/pricing" className="hover:border-b border-gray-600">
          Pricing
        </NavLink>
      </div>
     
      {user ? (
        <NavLink to="/profile" className="ml-auto">
          <FaCircleUser className="text-2xl hover:text-gray-600" />
        </NavLink>
      ) : (
        <div className="ml-auto p-6 flex gap-4 items-center">
          <NavLink to="/login" className="hover:border-b border-gray-600">
            Login
          </NavLink>
          <NavLink to="/signup">
            <button className="btn bg-blue-500 hover:bg-blue-400">
              Get Started
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

