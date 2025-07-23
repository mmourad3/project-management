import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfilePage = ({ user, deleteUser, setUser }) => {
  const navigate = useNavigate();

 if (!user) {
   return (
     <div className="min-h-screen flex flex-col items-center justify-center gap-10 dark:bg-gray-900">
       <h2 className="text-2xl dark:text-white">
         Please log in to view your profile.
       </h2>
       <Link
         to="/login"
         className="text-white bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-md px-3 py-2"
       >
         Login
       </Link>
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
    <div className="flex flex-col items-center dark:bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl dark:text-white font-bold mb-6">Profile Page</h1>
      <div className="bg-white dark:bg-gray-800 dark:text-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <p className="mb-2">
          <strong>Name:</strong> {user.fullName}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Phone Number:</strong> {user.phone}
        </p>
        <p className="mb-2">
          <strong>Company Name:</strong> {user.companyName}
        </p>
        <p className="mb-2">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="mb-2">
          <strong>Experience Level:</strong> {user.level}
        </p>
        <p className="mb-2">
          <strong>Workshop:</strong> {user.workshop}
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded mt-4 cursor-pointer"
          >
            Delete Account
          </button>
          <button
            onClick={handleLogOut}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded mt-4 ml-4 cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

