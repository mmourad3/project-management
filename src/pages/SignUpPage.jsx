import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUpPage.css";


const SignUpPage = ({ signUpSubmit }) => {
  const formRef=useRef(null);

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
  const [step, setStep]=useState(1)

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
    setStep(1);
    toast.info("Form has been reset")    
  }
  const next=()=>{
    if (formRef.current.checkValidity()) {
      setStep(step<3?step+1:3);
    }
    else{
      formRef.current.reportValidity();
    }
  }


  return (
    <div className="layout">
      <h1 className="createAcc">Create Your Account</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="form">
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

        {isFirstPartFilled && step >= 2 && (
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
        {isSecondPartFilled && step == 3 && (
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
            className={'reset-button'}
            onClick={resetForm}
          >
            Reset
          </button>
          <button type="button" onClick={next} className={`${step==3?"hidden":""} next`}>
            Next
          </button>

          <button
            type="submit"
            className={`${
              isFirstPartFilled && isSecondPartFilled && step==3
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


