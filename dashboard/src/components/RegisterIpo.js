import React, { useState } from "react";
import "./style.css";

const RegisterIpo = () => {
  const [activeTab, setActiveTab] = useState("ipoInformation");

  const [formData, setFormData] = useState({
    companyLogo: "",
    companyName: "",
    priceBand: "",
    openDate: "",
    closeDate: "",
    issueSize: "",
    issueType: "",
    listingDate: "",
    status: "",
    ipoPrice: "",
    listingPrice: "",
    listingGain: "",
    cmp: "",
    currentReturn: "",
    rhpLink: "",
    drhpLink: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUploadLogo = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, companyLogo: URL.createObjectURL(file) });
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="register-ipo-container">
      {/* Header */}
      <div className="header">
        <h2>Upcoming IPO Information</h2>
        <p>Manage your IPO Details</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "ipoInformation" ? "active" : ""}`}
          onClick={() => handleTabChange("ipoInformation")}
        ><i className="fa-regular fa-circle-question"></i>
          IPO Information
        </button>
        <button
          className={`tab ${activeTab === "ipoInfo" ? "active" : ""}`}
          onClick={() => handleTabChange("ipoInfo")}
        >
          IPO Info
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "ipoInformation" && (
          <div className="form-container">
            <div className="form-header">
              <h3>IPO Information</h3>
              <div className="form-buttons">
                <button className="register-btn" onClick={handleSubmit}>
                  Register
                </button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>

            <form>
              <div className="form-group">
                <label>Company Logo</label>
                <div className="logo-upload">
                  {formData.companyLogo && (
                    <img
                      src={formData.companyLogo}
                      alt="Company Logo"
                      className="logo-preview"
                    />
                  )}
                  <input type="file" onChange={handleUploadLogo} />
                  <button
                    type="button"
                    className="delete-logo-btn"
                    onClick={() =>
                      setFormData({ ...formData, companyLogo: "" })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Vodafone Idea"
                  />
                </div>
                <div className="form-field">
                  <label>Price Band</label>
                  <input
                    type="text"
                    name="priceBand"
                    value={formData.priceBand}
                    onChange={handleChange}
                    placeholder="Not Issued"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Open</label>
                  <input
                    type="date"
                    name="openDate"
                    value={formData.openDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>Close</label>
                  <input
                    type="date"
                    name="closeDate"
                    value={formData.closeDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Issue Size</label>
                  <input
                    type="text"
                    name="issueSize"
                    value={formData.issueSize}
                    onChange={handleChange}
                    placeholder="2300 Cr."
                  />
                </div>
                <div className="form-field">
                  <label>Issue Type</label>
                  <select
                    name="issueType"
                    value={formData.issueType}
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="Book Built">Book Built</option>
                    <option value="Fixed Price">Fixed Price</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Listing Date</label>
                  <input
                    type="date"
                    name="listingDate"
                    value={formData.listingDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Select Status</option>
                    <option value="New Listed">New Listed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </div>
              </div>

              <h4>New Listed IPO Details (When IPO Gets Listed)</h4>
              <div className="form-row">
                <div className="form-field">
                  <label>IPO Price</label>
                  <input
                    type="text"
                    name="ipoPrice"
                    value={formData.ipoPrice}
                    onChange={handleChange}
                    placeholder="₹383"
                  />
                </div>
                <div className="form-field">
                  <label>Listing Price</label>
                  <input
                    type="text"
                    name="listingPrice"
                    value={formData.listingPrice}
                    onChange={handleChange}
                    placeholder="₹435"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Listing Gain</label>
                  <input
                    type="text"
                    name="listingGain"
                    value={formData.listingGain}
                    onChange={handleChange}
                    placeholder="13.58%"
                  />
                </div>
                <div className="form-field">
                  <label>Listing Date</label>
                  <input
                    type="text"
                    name="cmp"
                    value={formData.cmp}
                    onChange={handleChange}
                    placeholder="Not Issued"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>CMP</label>
                  <input
                    type="text"
                    name="currentReturn"
                    value={formData.currentReturn}
                    onChange={handleChange}
                    placeholder="₹410"
                  />
                </div>
                <div className="form-field">
                  <label>Current Return</label>
                  <input
                    type="text"
                    name="cmp"
                    value={formData.cmp}
                    onChange={handleChange}
                    placeholder="₹410"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>RHP</label>
                  <input
                    type="text"
                    name="rhpLink"
                    value={formData.rhpLink}
                    onChange={handleChange}
                    placeholder="Enter RHP PDF Link"
                  />
                </div>
                <div className="form-field">
                  <label>DRHP</label>
                  <input
                    type="text"
                    name="drhpLink"
                    value={formData.drhpLink}
                    onChange={handleChange}
                    placeholder="Enter DRHP PDF Link"
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {activeTab === "ipoInfo" && (
          <div className="content">
            <h3>IPO Info</h3>
            <p>This section contains additional IPO Info.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterIpo;

