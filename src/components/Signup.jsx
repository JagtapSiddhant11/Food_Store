import React, { useState } from "react";
import { CustomizedLoginHook } from "../App";
import { Link } from "react-router-dom"; // Import Link for navigation

  export const SignUp = () => {
  const { setFormData } = CustomizedLoginHook();

  const [localData, setLocalData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (localData.username && localData.password) {
        // Save credentials to localStorage
        localStorage.setItem("user", JSON.stringify(localData));
        alert("Signup successful! You can now log in.");
        // navigate("/login"); // Redirect to the login page
      } else {
        alert("Please fill in all fields.");
      }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="flex flex-col gap-2 w-1/5 min-w-fit border p-5"
      >
        <h1 className="text-3xl text-center">Sign Up</h1>

        <label htmlFor="fullname" className="text-xl">
          Fullname
        </label>
        <div className="flex gap-1">
          <input
            name="firstname"
            value={localData.firstname}
            onChange={handleChange}
            type="text"
            placeholder="Enter first name"
            className="w-1/2 border px-5 py-2 outline-none"
          />
          <input
            name="lastname"
            value={localData.lastname}
            onChange={handleChange}
            type="text"
            placeholder="Enter last name"
            className="w-1/2 border px-5 py-2 outline-none"
          />
        </div>

        <label htmlFor="username" className="text-xl">
          Username
        </label>
        <input
          name="username"
          value={localData.username}
          onChange={handleChange}
          type="text"
          id="username"
          className="border outline-none px-5 py-2"
          placeholder="Enter username"
        />

        <label htmlFor="password" className="text-xl">
          Password
        </label>
        <input
          name="password"
          value={localData.password}
          onChange={handleChange}
          type="password"
          id="password"
          className="border outline-none px-5 py-2"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="border p-2 bg-emerald-400 hover:bg-emerald-500"
        >
          Submit
        </button>

        <span className="text-center">
          Already registered?{" "}
          <Link to="/login" className="text-xl text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;