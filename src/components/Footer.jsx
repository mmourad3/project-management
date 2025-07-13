import React from "react";
import { FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/footer/facebook.svg";
import Instagram from "../assets/images/footer/instagram.svg";
import LinkedIn from "../assets/images/footer/linkedin.svg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex mt-8 ml-20 gap-8">
        <section className="flex flex-col w-1/2">
          <Link className="flex items-center gap-1" to="/">
            <FaBullseye className="text-2xl text-gray-400" />
            <h1 className="text-xl font-semibold">Tasker</h1>
          </Link>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            maxime repellat, nostrum, officiis sint quia.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="Facebook" className="w-6 h-6 mt-3" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6 mt-3" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" className="w-6 h-6 mt-3" />
            </a>
            <a href="https://www.twitter.com/">
              <FaXTwitter className="w-6 h-6 mt-3 text-blue-500" />
            </a>
          </div>
        </section>
        <section className="flex flex-col w-1/4">
          <h3 className="text-lg font-bold">Tasker</h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/whats-new">What's New</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/premium">Premium</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/customer-success">Customer Success</Link>
            </li>
            <li>
              <Link to="/asana-templates">Asana Templates</Link>
            </li>
            <li>
              <Link to="/trust-and-security">Trust & Security</Link>
            </li>
            <li>
              <Link to="/status">Status</Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col w-1/4">
          <h3 className="text-lg font-bold">Solutions</h3>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <Link to="/enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="/small-business">Small Business</Link>
            </li>
            <li>
              <Link to="/personal-use">Personal Use</Link>
            </li>
            <li>
              <Link to="/remote-work">Remote work</Link>
            </li>
            <li>
              <Link to="/startups">Startups</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/nonprofits">Nonprofits</Link>
            </li>
            <li>
              <Link to="/engineering">Engineering</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/design">Design</Link>
            </li>
            <li>
              <Link to="/managers">Managers</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="flex justify-center items-center p-4 mt-8">
        <p className="text-gray-500 text-sm">
          © 2023 Tasker, Designed By Mumair
        </p>
      </div>
    </div>
  );
};

export default Footer;

