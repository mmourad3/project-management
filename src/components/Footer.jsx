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
                <Link
                  to="/"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/whats-new"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/premium"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Premium
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/enterprise"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-success"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Customer Success
                </Link>
              </li>
              <li>
                <Link
                  to="/asana-templates"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Asana Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/trust-and-security"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Trust & Security
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Solutions</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="/enterprise"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  to="/small-business"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Small Business
                </Link>
              </li>
              <li>
                <Link
                  to="/personal-use"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Personal Use
                </Link>
              </li>
              <li>
                <Link
                  to="/remote-work"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Remote Work
                </Link>
              </li>
              <li>
                <Link
                  to="/startups"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Startups
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/nonprofits"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Nonprofits
                </Link>
              </li>
              <li>
                <Link
                  to="/engineering"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/design"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  to="/managers"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Managers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Download</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="/phone-download"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  iOS & Android
                </Link>
              </li>
              <li>
                <Link
                  to="/laptop-download"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Mac & Windows
                </Link>
              </li>
              <li>
                <Link
                  to="/web-clipper"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Web Clipper
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Build</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="/integrations"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  to="/api-docs"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  to="/guides-and-tutorials"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Guides & Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/find-a-consultant"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Find a Consultant
                </Link>
              </li>
              <li>
                <Link
                  to="/become-an-affiliate"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Become an Affiliate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Get Started</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="/switch-from-confluence"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Switch from Confluence
                </Link>
              </li>
              <li>
                <Link
                  to="/switch-from-asana"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Switch from Asana
                </Link>
              </li>
              <li>
                <Link
                  to="/switch-from-evernote"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Switch from Evernote
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Resources</h3>
            <ul className="leading-loose text-gray-600 dark:text-gray-300">
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/media-kit"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Media Kit
                </Link>
              </li>
              <li>
                <Link
                  to="/email-us"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Email Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-settings"
                  className="hover:text-gray-800 hover:text-[17px] dark:hover:text-gray-400"
                >
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 mt-8">
        <p className="text-gray-500 ">© 2023 Tasker, Designed by Mumair</p>
      </div>
    </div>
  );
};

export default Footer;

