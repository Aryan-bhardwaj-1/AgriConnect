import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        🌾 <span>AgriConnect</span>
      </div>

      <p className="tagline">Connecting Farmers to a Better Connect</p>

      <ul className="menu">
        <li className="active">🏠 Dashboard</li>
        <li>🌱 My Crops</li>
        <li>🛒 Market</li>
        <li>💰 Sell Products</li>
        <li>🌦️ Weather</li>
        <li>💡 Farming Tips</li>
        <li>📦 Orders</li>
        <li>👤 Profile</li>
      </ul>

      <div className="sidebar-bottom">
        <button className="help-btn">❓ Help & Support</button>
        <button className="logout-btn">🚪 Logout</button>
      </div>
    </div>
  );
};


export default Sidebar;
