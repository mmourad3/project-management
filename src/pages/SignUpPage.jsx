import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = ({ signUpSubmit }) => {
  const [fullName, setFullName]=useState("");
  const [email, setEmail]=useState("");
  const [dob, setDob]=useState("");
  const [password, setPassword]=useState("");

  const navigate=useNavigate();

  useEffect(() => {
    if (localStorage.getItem("fromHero")==="true") {
      setEmail(localStorage.getItem("email"));
    }
    localStorage.removeItem("fromHero");
    localStorage.removeItem("email");
  }, []);

  const handleSubmit=async (e) => {
    e.preventDefault();

    try {
      const res=await fetch(
        `http://localhost:5000/users?email=${encodeURIComponent(email)}`
      );
      const existing= await res.json();
      if (existing.length>0){
        toast.error("User with this email already exists");
        return;
      }
      await signUpSubmit({ fullName, email, dob, password });
      toast.success("Sign Up Successful");
      navigate("/");

    } catch (err) {
      toast.error("Signup failed");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Create Your Account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-8 rounded shadow-md w-1/2"
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          className="border p-2 rounded mb-4"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          required
          className="border p-2 rounded mb-4"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;

