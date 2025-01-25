import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure you have the correct path to your CSS file

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Bluestock Fintech</h1>
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/" className="active">
            <i className="fa-solid fa-chart-simple"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/ManageIpo">
            <i className="fa-solid fa-cart-shopping"></i> Manage IPO
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-regular fa-chart-bar"></i> IPO Subscription
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-regular fa-comment"></i> IPO Allotment
          </Link>
        </li>
        <h2>Others</h2>
        <li>
          <Link to="#">
            <i className="fa-solid fa-gear"></i> Settings
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-regular fa-floppy-disk"></i> API Manager
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-regular fa-user"></i> Accounts
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa-regular fa-circle-question"></i> Help
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;


