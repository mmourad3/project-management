import React, { useState } from "react";
import heroImage from "../assets/images/hero/hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail]=useState("");
  const navigate = useNavigate();

  const submitForm=(e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("fromHero", "true");
    navigate("/signup");
  };


  return (
    <div className={`flex lg:flex-row flex-col bg-gray-100 p-6 justify-center items-center gap-6 hero-SlideUp`}>
      <section className="m-5 h-fit sm:w-full lg:w-1/4 p-6 md:p10 flex gap-6 flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Tasker brings all your tasks Teams & tools together
        </h1>
        <p className="text-2xl text-gray-400">
          Keep everything in the same place-even if your team isn't
        </p>

        <form onSubmit={submitForm} className="mr-auto flex gap-3 ">
          <input
            type="email"
            required
            className="border p-2 rounded h-10"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn bg-blue-500 text-white text hover:bg-blue-400">
            Sign Up It's Free
          </button>
        </form>
      </section>
      <div className="flex w-full lg:w-3/4 justify-center items-center">
        <img src={heroImage} alt="Hero" className="w-full md:w-3/4 lg:w-3/4" />
      </div>
    </div>
  );
};

export default Hero;

