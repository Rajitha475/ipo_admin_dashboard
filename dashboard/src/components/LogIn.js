import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LogIn = ({ onAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("isAuthenticated", "true"); // Store login status
      onAuth(true);
      navigate("/"); // Redirect to Dashboard
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h1 className="brand-title">Bluestock Fintech</h1>
      <div className="auth-box"></div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/SignUp">Sign Up</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
    
  );
};

export default LogIn;
