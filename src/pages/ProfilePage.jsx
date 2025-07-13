import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ user, deleteUser, setUser }) => {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center mt-20">
        <h2>Please log in to view your profile.</h2>
      </div>
    );
  }

  const handleDelete=async () => {
    const confirm=window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!confirm) return;

    await deleteUser(user.id);
    navigate("/");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null); 
    navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Profile Page</h1>
      <div className="p-6 rounded shadow-md w-1/2 bg-white">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <p className="mb-2">
          <strong>Name:</strong> {user.fullName}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Date of Birth:</strong> {user.dob}
        </p>
        <div className="flex justify-center">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Delete Account
        </button>
        <button 
        onClick={handleLogOut}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-4">
          Log Out
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

