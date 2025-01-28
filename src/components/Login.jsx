import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validate credentials
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/cuisine"); // Redirect to the home page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen font-serif">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-10 w-1/4 border border-solid shadow-lg"
      >
        <h1 className="text-2xl text-center font-semibold">Login</h1>

        <label htmlFor="username" className="text-xl">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          className="border outline-none px-5 py-2"
          placeholder="Enter username"
        />

        <label htmlFor="password" className="text-xl">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          className="border outline-none px-5 py-2"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="text-xl bg-slate-400 hover:bg-slate-500 p-2 mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
