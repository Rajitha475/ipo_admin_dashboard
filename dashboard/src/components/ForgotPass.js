import React, { useState } from "react";
import "./style.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleGetCode = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Simulating sending a reset code (In real case, API call would be here)
    setMessage(`A password reset code has been sent to ${email}. Check your inbox.`);
  };

  return (
    <div className="auth-container">
      <h1 className="brand-title">Bluestock Fintech</h1>
      <div className="auth-box">
        <h2>Forgot Password</h2>
        <form>
          <div className="form-group">
            <label>Enter your registered email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button onClick={handleGetCode}>Get Code</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        <p>
          Remembered your password? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
