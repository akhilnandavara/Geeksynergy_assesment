// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.name.toLowerCase() === credentials.name.toLowerCase() &&
      storedUser.password === credentials.password
    ) {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={credentials.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <Link to={"/"}>
          <button>Signup</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
