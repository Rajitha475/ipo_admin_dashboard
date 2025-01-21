import React from 'react';
import './style.css';

function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <h1>Bluestock Fintech</h1>
        <ul>
          <h2>MENU</h2>
          <li><a href="#" className="active"><i className="fa-solid fa-chart-simple"></i>Dashboard</a></li>
          <li><a href="#"><i className="fa-solid fa-cart-shopping"></i>Manage IPO</a></li>
          <li><a href="#"><i className="fa-regular fa-chart-bar"></i>IPO Subscription</a></li>
          <li><a href="#"><i className="fa-regular fa-comment"></i>IPO Allotment</a></li>
          <h2>OTHERS</h2>
          <li><a href="#"><i className="fa-solid fa-gear"></i>Settings</a></li>
          <li><a href="#"><i className="fa-regular fa-floppy-disk"></i>API Manager</a></li>
          <li><a href="#"><i className="fa-regular fa-user"></i>Accounts</a></li>
          <li><a href="#"><i className="fa-regular fa-circle-question"></i>Help</a></li>
        </ul>
      </div>
   </div>
      
  );
}

export default Sidebar;
