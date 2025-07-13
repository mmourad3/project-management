import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogInPage = ({loginSubmit}) => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async (e) => {
    e.preventDefault();

    try {
      const user=await loginSubmit(email, password);
        toast.success("Logged in!");
        navigate("/");
      

    } catch {
      toast.error("Invalid email or password");
    }
    
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Log In</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-8 rounded shadow-md w-1/2"
      >
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInPage;


