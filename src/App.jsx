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
    const res= await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const savedUser=await res.json();
    localStorage.setItem("user", JSON.stringify(savedUser));
    setUser(savedUser);
    return savedUser;
  };

  const login=async (email, password) => {
    const res= await fetch(
      `http://localhost:5000/users?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`
    );
    const users=await res.json();
    if (users.length===1) {
      localStorage.setItem("user", JSON.stringify(users[0]));
      setUser(users[0]);
      return users[0];
    }
    throw new Error("Invalid email or password");
  };

  const deleteUser=async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
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

