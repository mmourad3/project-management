import React, { useState } from "react";
import { FaBullseye, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBars, FaCircleUser } from "react-icons/fa6";

const Navbar = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        isMenuOpen ? "dark:bg-gray-950" : ""
      } px-6 md:bg-gray-50 dark:md:bg-gray-800`}
    >
      <div className="flex items-center min-h-[5rem] gap-4 pt-6 md:pt-0">
        <div className="flex md:ml-24">
          <NavLink className="flex items-center gap-1" to="/">
            <FaBullseye className="text-3xl text-blue-400" />
            <h1 className="text-2xl font-semibold dark:text-white">Tasker</h1>
          </NavLink>
        </div>

        <div className="md:hidden ml-auto flex gap-4 text-2xl">
          {user ? (
            <NavLink to="/profile" className="flex items-center">
              <FaCircleUser className="hover:text-gray-600" />
            </NavLink>
          ) : null}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-fit">
            {isMenuOpen ? (
              <FaTimes className="cursor-pointer" />
            ) : (
              <FaBars className="cursor-pointer" />
            )}
          </button>
        </div>

        <div className="hidden md:flex md:flex-row items-center md:ml-10 md:gap-8 text-gray-500 dark:text-gray-400">
          <NavLink
            to="/product"
            className="hover:border-b border-gray-600 dark:border-gray-400"
          >
            Product
          </NavLink>
          <NavLink
            to="/solutions"
            className="hover:border-b border-gray-600 dark:border-gray-400"
          >
            Solutions
          </NavLink>
          <NavLink
            to="/resources"
            className="hover:border-b border-gray-600 dark:border-gray-400"
          >
            Resources
          </NavLink>
          <NavLink
            to="/entreprise"
            className="hover:border-b border-gray-600 dark:border-gray-400"
          >
            Entreprise
          </NavLink>
          <NavLink
            to="/pricing"
            className="hover:border-b border-gray-600 dark:border-gray-400"
          >
            Pricing
          </NavLink>
        </div>

        <div className="hidden md:flex ml-auto">
          {user ? (
            <NavLink to="/profile" className="flex">
              <FaCircleUser className="text-2xl hover:text-gray-600" />
            </NavLink>
          ) : (
            <div className="flex gap-8 items-center">
              <NavLink
                to="/login"
                className="hover:border-b border-gray-600 text-gray-500 dark:text-gray-400 dark:border-gray-400"
              >
                Login
              </NavLink>
              <NavLink to="/signup">
                <button className="btn bg-blue-500 hover:bg-blue-400 text-white dark:hover:bg-blue-500 dark:bg-blue-600">
                  Get Started
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-gray-500 dark:text-gray-400">
          <NavLink
            to="/product"
            className="w-fit px-2 hover:border-b border-gray-600 dark:border-gray-400"
          >
            Product
          </NavLink>
          <NavLink
            to="/solutions"
            className="w-fit px-2 hover:border-b border-gray-600 dark:border-gray-400"
          >
            Solutions
          </NavLink>
          <NavLink
            to="/resources"
            className="w-fit px-2 hover:border-b border-gray-600 dark:border-gray-400"
          >
            Resources
          </NavLink>
          <NavLink
            to="/entreprise"
            className="w-fit px-2 hover:border-b border-gray-600 dark:border-gray-400"
          >
            Entreprise
          </NavLink>
          <NavLink
            to="/pricing"
            className="w-fit px-2 hover:border-b border-gray-600 dark:border-gray-400"
          >
            Pricing
          </NavLink>

          {!user ? (
            <div className="flex justify-evenly gap-3 mb-3 mt-4">
              <NavLink to="/login">
                <button className="btn bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 text-white">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="btn bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 text-white">
                  Get Started
                </button>
              </NavLink>
            </div>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
