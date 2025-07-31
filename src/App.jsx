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
  const [user, setUser]=useState(() => {
    const savedUser=localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser):null;
  });

  const signUp= async (newUser) => {
    const random =Math.random();
    if (random<0.5){
      localStorage.setItem("user",JSON.stringify(newUser));
      setUser(newUser);
      return newUser;
    }
    else{
      throw new Error("Signup failed. Try again")
    }
  };

  const login=async (email, password) => {
    const savedUser=JSON.parse(localStorage.getItem("user"));
    if (savedUser&& savedUser.email==email&& savedUser.password==password){
      setUser(savedUser)
      return savedUser
    }
    throw new Error("Invalid email or password")

  };

  const deleteUser=async () => {
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

