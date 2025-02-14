import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'; // Ensure you have the correct path to your CSS file

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Bluestock Fintech</h1>
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink  to="/" 
              exact
              activeClassName="active-link"
              className="nav-link">
            <i className="fa-solid fa-chart-simple"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/ManageIpo" 
              activeClassName="active-link"
              className="nav-link"
            >
            <i className="fa-solid fa-cart-shopping"></i> Manage IPO
          </NavLink>
        </li>
        <li>
          <NavLink to="/IpoSubscription"
              className="nav-link">
            <i className="fa-regular fa-chart-bar"></i> IPO Subscription
          </NavLink>
        </li>
        <li>
          <NavLink to="/IpoAllotment"
              className="nav-link">
            <i className="fa-regular fa-comment"></i> IPO Allotment
          </NavLink>
        </li>
        <h2>Others</h2>
        <li>
          <NavLink to="/Settings"
              className="nav-link">
            <i className="fa-solid fa-gear"></i> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/ApiManager" 
              className="nav-link">
            <i className="fa-regular fa-floppy-disk"></i> API Manager
          </NavLink>
        </li>
        <li>
          <NavLink to="/Accounts"
              className="nav-link">
            <i className="fa-regular fa-user"></i> Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="/Help"
              className="nav-link">
            <i className="fa-regular fa-circle-question"></i> Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

