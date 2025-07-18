import React from "react";
import { FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Facebook from "../assets/images/footer/facebook.svg";
import Instagram from "../assets/images/footer/instagram.svg";
import LinkedIn from "../assets/images/footer/linkedin.svg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-custom pt-10">
      <div className="px-6 flex flex-col md:flex-row gap-10 md:gap-4 md:mx-30">
        <section className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left">
          <Link
            className="flex items-center justify-center md:justify-start gap-2"
            to="/"
          >
            <FaBullseye className="text-5xl text-blue-400" />
            <h1 className="text-4xl font-semibold">Tasker</h1>
          </Link>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xs md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            maxime repellat, nostrum, officiis sint quia.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.twitter.com/">
              <FaXTwitter className="w-8 h-8 text-blue-500" />
            </a>
          </div>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center w-full">
          <div>
            <h3 className="text-lg font-bold mb-2">Tasker</h3>
            <ul className="leading-loose  text-gray-600 dark:text-gray-300">
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
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Solutions</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
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
                <Link to="/remote-work">Remote Work</Link>
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
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Download</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link to="/phone-download">iOS & Android</Link>
              </li>
              <li>
                <Link to="/laptop-download">Mac & Windows</Link>
              </li>
              <li>
                <Link to="/web-clipper">Web Clipper</Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Build</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link to="/integrations">Integrations</Link>
              </li>
              <li>
                <Link to="/templates">Templates</Link>
              </li>
              <li>
                <Link to="/api-docs">API Docs</Link>
              </li>
              <li>
                <Link to="/guides-and-tutorials">Guides & Tutorials</Link>
              </li>
              <li>
                <Link to="/find-a-consultant">Find a Consultant</Link>
              </li>
              <li>
                <Link to="/become-an-affiliate">Become an Affiliate</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Get Started</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link to="/switch-from-confluence">Switch from Confluence</Link>
              </li>
              <li>
                <Link to="/switch-from-asana">Switch from Asana</Link>
              </li>
              <li>
                <Link to="/switch-from-evernote">Switch from Evernote</Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Resources</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/media-kit">Media Kit</Link>
              </li>
              <li>
                <Link to="/email-us">Email Us</Link>
              </li>
              <li>
                <Link to="/cookie-settings">Cookie Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 mt-8">
        <p className="text-gray-500 ">
          © 2023 Tasker, Designed by Mumair
        </p>
      </div>
    </div>
  );
};

export default Footer;

