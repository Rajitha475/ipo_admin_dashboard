import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Dashboard from './components/Dashboard';
import ManageIpo from './components/ManageIpo';
import Header from "./components/Header";
import RegisterIpo from './components/RegisterIpo'; 
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPass";
import './components/style.css'; // Ensure correct path to CSS file

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);
  return (
    <Router>
      <div className="app-container">
      {isAuthenticated && <Header />}
        {isAuthenticated && <Sidebar />} {/* Use Sidebar here */}
        <div className="main-content">
          <Routes>
          {isAuthenticated ? (
              <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ManageIpo" element={<ManageIpo />} />
            <Route path="/RegisterIpo" element={<RegisterIpo />} />
            </>
            ) : (
              <>
                <Route path="/LogIn" element={<LogIn onAuth={setIsAuthenticated} />} />
                <Route path="/SignUp" element={<SignUp onAuth={setIsAuthenticated} />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="*" element={<Navigate to="/LogIn" />} />
              </> 
            )}
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
