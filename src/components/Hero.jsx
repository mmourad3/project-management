import React, { useState } from "react";
import heroImage from "../assets/images/hero/hero.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("fromHero", "true");
    navigate("/signup");
  };

  return (
    <div
      className={`flex lg:flex-row flex-col bg-gray-50 dark:bg-gray-800 justify-center items-center  hero-SlideUp`}
    >
      <section className="relative z-10 m-5 sm:w-full lg:w-1/3 pl-6 md:pl-18 flex gap-6 text-center md:text-left flex-col items-center justify-center ">
        <h1 className="text-4xl lg:text-6xl font-bold leading-16 dark:text-white">
          Tasker brings all your tasks Teams & tools together
        </h1>
        <p className="text-2xl text-gray-400">
          Keep everything in the same place-even if your team isn't
        </p>

        <form onSubmit={submitForm} className="md:mr-auto flex gap-3 ">
          <input
            type="email"
            required
            className="border p-2 rounded w-60 h-12 dark:text-black dark:bg-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn bg-blue-500 h-12 w-40 text-[16px] text-white text hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Sign Up It's Free
          </button>
        </form>
      </section>
      <div className="flex w-full lg:w-2/3 justify-end items-end mt-10 sm:mt-0">
        <img
          src={heroImage}
          alt="Hero"
          className="relative z-0 w-full max-w-full mt-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
