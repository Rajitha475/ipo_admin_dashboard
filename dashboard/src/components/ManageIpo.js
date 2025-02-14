import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'; // Make sure your CSS file is correctly imported

const ManageIPO = () => {
  const navigate = useNavigate();
  return (
    <div className="main-ipo">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Manage IPO</h1>
          <Link to="/RegisterIpo">
          <button onClick={() => navigate('/RegisterIpo')}>Register IPO</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Price Band</th>
              <th>Open</th>
              <th>Close</th>
              <th>ISSUE SIZE</th>
              <th>ISSUE Type</th>
              <th>Listing Date</th>
              <th>Status</th>
              <th>Action</th>
              <th>Delete/View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Adani Power</td>
              <td>₹129 - 136</td>
              <td>2024-06-03</td>
              <td>2024-06-05</td>
              <td>130.15 Cr.</td>
              <td>Book Built</td>
              <td>2024-06-10</td>
              <td><span className="status ongoing">Ongoing</span></td>
              <td><button>Update</button></td>
              <td className="action-buttons">
                <button className="delete">Delete</button>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>VBL LTD</td>
              <td>₹129 - 136</td>
              <td>2024-06-03</td>
              <td>2024-06-05</td>
              <td>130.15 Cr.</td>
              <td>Book Built</td>
              <td>2024-06-10</td>
              <td><span className="status coming">Coming</span></td>
              <td><button>Update</button></td>
              <td className="action-buttons">
                <button className="delete">Delete</button>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>Tata Motor</td>
              <td>₹129 - 136</td>
              <td>2024-06-03</td>
              <td>2024-06-05</td>
              <td>130.15 Cr.</td>
              <td>Book Built</td>
              <td>2024-06-10</td>
              <td><span className="status new-listed">New Listed</span></td>
              <td><button>Update</button></td>
              <td className="action-buttons">
                <button className="delete">Delete</button>
                <button>View</button>
              </td>
            </tr>
            
            {/* Add more rows as needed */}
          </tbody>
          
         
        </table>
        <br></br>
        <br></br>
        <table><tbody>
        <tr>
              <td>BSE India</td>
              <td>₹129 - 136</td>
              <td>2024-06-03</td>
              <td>2024-06-0</td>
              <td>Indus tower</td>
              <td>₹129 - 136</td>
              <td>2024-06-03</td>
              <td>2024-06-05</td>
              <td>130.15 Cr.</td>
              <td>Book Built</td>
              <td>2024</td>
              </tr>
              </tbody></table>
        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>...</button>
          <button>9</button>
          <button>10</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ManageIPO;

