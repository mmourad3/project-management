import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUpPage.css";

const SignUpPage = ({ signUpSubmit }) => {
  const [form, setForm]=useState({
    fullName:"",
    email:"",
    phone:"",
    password:"",
    companyName:"",
    role:"",
    level:"",
    workshop:""
  })
  
  const [isFirstPartFilled, setIsFirstPartFilled]=useState(false);
  const [isSecondPartFilled, setIsSecondPartFilled]= useState(false);

  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  useEffect(()=>{
    if(form.fullName&& form.email && form.phone && form.password){
      setIsFirstPartFilled(true)
    }
    else{
      setIsFirstPartFilled(false)
    }
  },[form.fullName, form.email, form.phone, form.password])

  useEffect(() => {
    if (form.companyName&& form.role && form.level) {
      setIsSecondPartFilled(true);
    } else {
      setIsSecondPartFilled(false);
    }
  },[form.companyName, form.role, form.level]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("fromHero") === "true") {
      setForm({...form, email:localStorage.getItem("email")});
    }
    localStorage.removeItem("fromHero");
    localStorage.removeItem("email");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5000/users?email=${encodeURIComponent(form.email)}`
      );
      const existing = await res.json();
      if (existing.length > 0) {
        toast.error("User with this email already exists");
        return;
      }
      await signUpSubmit(form);
      toast.success("Sign Up Successful");
      navigate("/");
    } catch (err) {
      toast.error("Signup failed");
    }
  };

  const resetForm=()=>{
    setForm({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      companyName: "",
      role: "",
      level: "",
      workshop: ""
    });
    toast.info("Form has been reset")
  }

  return (
    <div className="layout">
        <h1 className="createAcc">Create Your Account</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="input"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="input"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Enter your 8-digit phone number"
            name="phone"
            required
            className="input"
            pattern="[0-9]{8}"
            maxLength={8}
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="input"
            minLength={8}
            value={form.password}
            onChange={handleChange}
          />

          {isFirstPartFilled && (
            <>
              <input
                type="text"
                required
                name="companyName"
                className="input"
                placeholder="Company Name"
                value={form.companyName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Role"
                required
                name="role"
                className="input"
                value={form.role}
                onChange={handleChange}
              />
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                required
                className="select"
              >
                <option className="options" value="">
                  Select your Experience Level
                </option>
                <option className="options" value="Student">
                  Student
                </option>
                <option className="options" value="Junior">
                  Junior
                </option>
                <option className="options" value="Senior">
                  Senior
                </option>
              </select>
            </>
          )}
          {isSecondPartFilled && (
            <select
              name="workshop"
              value={form.workshop}
              onChange={handleChange}
              required
              className="select"
            >
              <option className="options" value="">
                Select the Workshop
              </option>
              <option className="options" value="React">
                React Workshop
              </option>
              <option className="options" value="AI">
                AI Workshop
              </option>
            </select>
          )}
          <div className="buttons-div">
            <button
              type="button"
              className={`${
                isFirstPartFilled && isSecondPartFilled
                  ? "reset-button-Filled"
                  : "reset-button-NotFilled"
              } reset-button`}
              onClick={resetForm}
            >
              Reset
            </button>
            <button
              type="submit"
              className={`${
                isFirstPartFilled && isSecondPartFilled
                  ? "signup-buttonFilled"
                  : "signup-buttonNotFilled"
              }`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
  );
};

export default SignUpPage;

