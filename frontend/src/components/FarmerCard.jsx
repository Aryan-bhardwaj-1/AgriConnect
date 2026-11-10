import React, { useState } from "react";

export default function Farmer() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "My Products", icon: "🌾" },
    { name: "Orders", icon: "📦" },
    { name: "Earnings", icon: "💰" },
    { name: "Profile", icon: "👤" },
    { name: "Settings", icon: "⚙️" },
  ];

  const renderPage = () => {
    switch (activePage) {
      case "My Products":
        return <Products />;

      case "Orders":
        return <Orders />;

      case "Earnings":
        return <Earnings />;

      case "Profile":
        return <Profile />;

      case "Settings":
        return <Settings />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        body {
          background: #f5f7f5;
        }

        .farmer-container {
          display: flex;
          min-height: 100vh;
        }

        /* SIDEBAR */
        .sidebar {
          width: 250px;
          background: #123d25;
          color: white;
          padding: 25px 15px;
          position: fixed;
          height: 100vh;
          left: 0;
          top: 0;
        }

        .logo {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 35px;
          color: #b7f397;
        }

        .farmer-info {
          text-align: center;
          margin-bottom: 30px;
        }

        .farmer-avatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #8bc34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          font-size: 35px;
        }

        .farmer-info h3 {
          margin-top: 10px;
        }

        .farmer-info p {
          color: #b8cbbd;
          font-size: 13px;
        }

        .menu {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .menu button {
          border: none;
          background: transparent;
          color: white;
          padding: 13px;
          text-align: left;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
        }

        .menu button:hover,
        .menu button.active {
          background: #2e7d32;
        }

        .logout {
          position: absolute;
          bottom: 25px;
          left: 15px;
          right: 15px;
          background: #d9534f !important;
          text-align: center !important;
        }

        /* MAIN */
        .main {
          margin-left: 250px;
          width: calc(100% - 250px);
          padding: 30px;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .topbar h1 {
          color: #173d24;
        }

        .topbar p {
          color: #777;
          margin-top: 5px;
        }

        .add-btn {
          background: #2e7d32;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        /* CARDS */
        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          background: white;
          padding: 22px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.07);
        }

        .card-icon {
          font-size: 28px;
        }

        .card h4 {
          color: #777;
          margin-top: 12px;
        }

        .card h2 {
          margin-top: 7px;
          color: #173d24;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .section {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(0,0,0,0.07);
        }

        .section h2 {
          color: #173d24;
          margin-bottom: 20px;
        }

        /* TABLE */
        table {
          width: 100%;
          border-collapse: collapse;
        }

        th,
        td {
          padding: 14px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        th {
          color: #555;
          background: #f7faf7;
        }

        .status {
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          background: #dff5df;
          color: #237b23;
        }

        /* QUICK ACTIONS */
        .quick-actions {
          display: grid;
          gap: 12px;
        }

        .quick-actions button {
          padding: 14px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          text-align: left;
        }

        .quick-actions button:hover {
          background: #f1f8f1;
          border-color: #4caf50;
        }

        /* RESPONSIVE */
        @media(max-width: 1000px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 700px) {
          .sidebar {
            width: 70px;
            padding: 15px 8px;
          }

          .logo {
            font-size: 0;
          }

          .logo::after {
            content: "🌾";
            font-size: 25px;
          }

          .farmer-info h3,
          .farmer-info p {
            display: none;
          }

          .menu button {
            text-align: center;
            font-size: 0;
          }

          .menu button:first-letter {
            font-size: 20px;
          }

          .logout {
            font-size: 0 !important;
          }

          .logout::after {
            content: "🚪";
            font-size: 20px;
          }

          .main {
            margin-left: 70px;
            width: calc(100% - 70px);
            padding: 20px;
          }

          .cards {
            grid-template-columns: 1fr;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          table {
            min-width: 650px;
          }

          .section {
            overflow-x: auto;
          }
        }
      `}</style>

      <div className="farmer-container">

        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="logo">
            🌾 AGRI-CONNECT
          </div>

          <div className="farmer-info">
            <div className="farmer-avatar">👨‍🌾</div>
            <h3>Farmer</h3>
            <p>Farmer Account</p>
          </div>

          <div className="menu">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={activePage === item.name ? "active" : ""}
                onClick={() => setActivePage(item.name)}
              >
                {item.icon} &nbsp; {item.name}
              </button>
            ))}
          </div>

          <button
            className="menu button logout"
            onClick={() => {
              localStorage.removeItem("farmer");
              window.location.href = "/farmer-login";
            }}
          >
            🚪 Logout
          </button>

        </aside>

        {/* MAIN CONTENT */}
        <main className="main">

          <div className="topbar">
            <div>
              <h1>{activePage}</h1>
              <p>Welcome back, Farmer 👋</p>
            </div>

            {activePage === "Dashboard" && (
              <button className="add-btn">
                + Add Product
              </button>
            )}
          </div>

          {renderPage()}

        </main>

      </div>
    </>
  );
}


/* ================= DASHBOARD ================= */

function Dashboard() {
  return (
    <>
      <div className="cards">

        <div className="card">
          <div className="card-icon">🌾</div>
          <h4>Total Products</h4>
          <h2>24</h2>
        </div>

        <div className="card">
          <div className="card-icon">📦</div>
          <h4>Total Orders</h4>
          <h2>86</h2>
        </div>

        <div className="card">
          <div className="card-icon">💰</div>
          <h4>Total Earnings</h4>
          <h2>₹48,650</h2>
        </div>

        <div className="card">
          <div className="card-icon">🚚</div>
          <h4>Pending Orders</h4>
          <h2>12</h2>
        </div>

      </div>

      <div className="content-grid">

        <div className="section">
          <h2>Recent Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Buyer</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>🌾 Wheat</td>
                <td>Rahul</td>
                <td>100 Kg</td>
                <td>₹3,200</td>
                <td><span className="status">Completed</span></td>
              </tr>

              <tr>
                <td>🍅 Tomato</td>
                <td>Amit</td>
                <td>50 Kg</td>
                <td>₹2,500</td>
                <td><span className="status">Pending</span></td>
              </tr>

              <tr>
                <td>🥔 Potato</td>
                <td>Rohit</td>
                <td>80 Kg</td>
                <td>₹2,400</td>
                <td><span className="status">Completed</span></td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="section">
          <h2>Quick Actions</h2>

          <div className="quick-actions">
            <button>🌾 Add New Product</button>
            <button>📦 View Orders</button>
            <button>💰 Check Earnings</button>
            <button>📈 View Analytics</button>
          </div>

        </div>

      </div>
    </>
  );
}


/* ================= PRODUCTS ================= */

function Products() {
  return (
    <div className="section">

      <h2>My Products</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>🌾 Wheat</td>
            <td>Grains</td>
            <td>500 Kg</td>
            <td>₹32/Kg</td>
            <td><span className="status">Active</span></td>
          </tr>

          <tr>
            <td>🌾 Rice</td>
            <td>Grains</td>
            <td>750 Kg</td>
            <td>₹48/Kg</td>
            <td><span className="status">Active</span></td>
          </tr>

          <tr>
            <td>🍅 Tomato</td>
            <td>Vegetables</td>
            <td>300 Kg</td>
            <td>₹50/Kg</td>
            <td><span className="status">Active</span></td>
          </tr>

          <tr>
            <td>🥔 Potato</td>
            <td>Vegetables</td>
            <td>450 Kg</td>
            <td>₹30/Kg</td>
            <td><span className="status">Active</span></td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}


/* ================= ORDERS ================= */

function Orders() {
  return (
    <div className="section">

      <h2>My Orders</h2>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#ORD001</td>
            <td>Wheat</td>
            <td>Rahul Kumar</td>
            <td>₹3,200</td>
            <td><span className="status">Completed</span></td>
          </tr>

          <tr>
            <td>#ORD002</td>
            <td>Tomato</td>
            <td>Amit Singh</td>
            <td>₹2,500</td>
            <td><span className="status">Pending</span></td>
          </tr>

          <tr>
            <td>#ORD003</td>
            <td>Potato</td>
            <td>Rohit Sharma</td>
            <td>₹2,400</td>
            <td><span className="status">Completed</span></td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}


/* ================= EARNINGS ================= */

function Earnings() {
  return (
    <div className="cards">

      <div className="card">
        <div className="card-icon">💰</div>
        <h4>Total Earnings</h4>
        <h2>₹48,650</h2>
      </div>

      <div className="card">
        <div className="card-icon">📅</div>
        <h4>This Month</h4>
        <h2>₹12,450</h2>
      </div>

      <div className="card">
        <div className="card-icon">⏳</div>
        <h4>Pending Payment</h4>
        <h2>₹4,250</h2>
      </div>

      <div className="card">
        <div className="card-icon">📈</div>
        <h4>Today's Earnings</h4>
        <h2>₹2,100</h2>
      </div>

    </div>
  );
}


/* ================= PROFILE ================= */

function Profile() {
  return (
    <div className="section">

      <h2>Farmer Profile</h2>

      <p><b>Name:</b> Farmer</p>
      <br />

      <p><b>Email:</b> farmer@example.com</p>
      <br />

      <p><b>Phone:</b> +91 XXXXX XXXXX</p>
      <br />

      <p><b>Location:</b> Uttar Pradesh, India</p>

    </div>
  );
}


/* ================= SETTINGS ================= */

function Settings() {
  return (
    <div className="section">

      <h2>Settings</h2>

      <div className="quick-actions">
        <button>🔔 Notification Settings</button>
        <button>🔐 Change Password</button>
        <button>💳 Payment Settings</button>
        <button>🌐 Language</button>
      </div>

    </div>
  );
}
