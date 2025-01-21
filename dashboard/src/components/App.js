import React from 'react';
import './style.css'; // Import the CSS file
import profileImg1 from '../Images/vpf.png';
import profileImg2 from '../Images/pic2.png';
import profileImg3 from '../Images/pic3.png';
import profileImg4 from '../Images/pic4.png';
import profileImg5 from '../Images/pic5.png';
function App() {
  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Bluestock Fintech</h1>
        <h2>Menu</h2>
        <ul>
          <li><a href="/" className="active"><i className="fa-solid fa-chart-simple"></i> Dashboard</a></li>
          <li><a href="#"><i className="fa-solid fa-cart-shopping"></i> Manage IPO</a></li>
          <li><a href="#"><i className="fa-regular fa-chart-bar"></i> IPO Subscription</a></li>
          <li><a href="#"><i className="fa-regular fa-comment"></i> IPO Allotment</a></li>
          <h2>Others</h2>
          <li><a href="#"><i className="fa-solid fa-gear"></i> Settings</a></li>
          <li><a href="#"><i className="fa-regular fa-floppy-disk"></i> API Manager</a></li>
          <li><a href="#"><i className="fa-regular fa-user"></i> Accounts</a></li>
          <li><a href="#"><i className="fa-regular fa-circle-question"></i> Help</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button><i className="fas fa-search"></i></button>
          </div>
          <div className="header-right">
            <div className="profile">
              <img src={profileImg1} alt="Profile" className="profile-img" />
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

        {/* Dashboard Content */}
        <div className="dashboard">
          <div className="card">
            <h3>IPO Dashboard India</h3>
            <p className="gain-text">⬆ 20 IPO in Gain</p>
            <div className="bubble-chart">
              <div className="bubble total">
                <span>30</span>
                <p>Total IPO</p>
              </div>
              <div className="bubble gain">
                <span>20</span>
                <p>IPO in Gain</p>
              </div>
              <div className="bubble loss">
                <span>9</span>
                <p>IPO in Loss</p>
              </div>
            </div>
          </div>

          <div className="card links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#"><img src={profileImg2} alt="NSE India" className="profile-img" />NSE India</a><span className="visit-text">Visit Now</span></li>
              <li><a href="#"><img src={profileImg3} alt="BSE India" className="profile-img" />BSE India</a><span className="visit-text">Visit Now</span></li>
              <li><a href="#"><img src={profileImg4} alt="SEBI" className="profile-img" />SEBI</a><span className="visit-text">Visit Now</span></li>
              <li><a href="#"><img src={profileImg5} alt="Money Control" className="profile-img" />Money Control</a><span className="visit-text">Visit Now</span></li>
            </ul>
          </div>

          <div className="card main-board">
            <h3>Main Board IPO</h3>
            <span className="view-report">View Report</span>
            <p>From 01 Jan 2024</p>
            <div className="donut-chart">
              <div className="tooltip">
                <span>15</span>
                <p>Afternoon<br />IPO NSE & BSE</p>
              </div>
            </div>
            <div className="chart-legend">
              <span><span className="dot upcoming"></span> Upcoming <p>15</p></span>
              <span><span className="dot new-listed"></span> New Listed<p>25</p></span>
              <span><span className="dot ongoing"></span> Ongoing<p>2</p></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
