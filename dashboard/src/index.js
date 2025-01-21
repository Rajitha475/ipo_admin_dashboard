import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18
import App from "./components/App"; // Updated path
import "./components/App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


