import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  const url = "http://localhost:3000";
  const [user, setUser]=useState(() => {
    const savedUser=localStorage.getItem("user");
    if(!savedUser){
      return null;
    }
    try {
      return JSON.parse(savedUser);
    } catch (error) {
      return null;
    }
  });

  const signUp= async (newUser) => {
    const res= await fetch(`${url}/signup`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newUser),
    })
    const data =await res.json();
  if(data.success){
    setUser(data.user);
      localStorage.setItem("user",JSON.stringify(data.user));
      return data.user;
}
    else{
      throw new Error(data.message);
    }
  };

  const login=async (email, password) => {
    const res=await fetch(`${url}/login`,{
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({email, password})
    })
const user=await res.json();
if(user){
  setUser(user);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}
    throw new Error("Invalid email or password")

  };

  const deleteUser=async () => {
    if(user){
      await fetch(`${url}/${user.id}`,{
        method:"DELETE"
      })
    }
    localStorage.removeItem("user");
    setUser(null);
  };

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout user={user}/>}>
        <Route index element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage signUpSubmit={signUp} />} />
        <Route path="/login" element={<LogInPage loginSubmit={login} />} />
        <Route
          path="/profile"
          element={<ProfilePage user={user} deleteUser={deleteUser} setUser={setUser} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

