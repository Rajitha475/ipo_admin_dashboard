import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
import Dashboard from './components/Dashboard';
import ManageIpo from './components/ManageIpo';
import Header from "./components/Header";
import RegisterIpo from './components/RegisterIpo'; 
import './components/style.css'; // Ensure correct path to CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
      <Header />
        <Sidebar /> {/* Use Sidebar here */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ManageIpo" element={<ManageIpo />} />
            <Route path="/register-ipo" component={RegisterIpo} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
