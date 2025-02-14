import React from "react";
import profileImg from "../Images/vpf.png"; // Update with the correct path to your profile image
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="header-right">
        <div className="profile">
          <img src={profileImg} alt="Profile" className="profile-img" />
          <span className="username">Hi, Vishal</span>
        </div>
        <div className="dropdown">
          <button className="dropdown-btn">
            <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="notification-icon">
          <i className="fa-regular fa-bell"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;

