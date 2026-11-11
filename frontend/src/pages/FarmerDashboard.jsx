import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "./API";

function FarmerDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [data, setData] = useState({
    products: 0,
    total_orders: 0,
    pending_orders: 0,
    total_sales: 0,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      navigate("/farmer-login");
      return;
    }

    const farmer = JSON.parse(savedUser);

    if (farmer.role !== "farmer") {
      navigate("/farmer-login");
      return;
    }

    setUser(farmer);

    fetch(`${API_URL}/api/farmer/${farmer.id}/dashboard`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log("Dashboard error:", error);
      });
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/farmer-login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7f4",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "#166534",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🌾 AGRI CONNECT</h2>

        <div>
          <button
            onClick={() => navigate("/farmer-dashboard")}
            style={buttonStyle}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/add-produce")}
            style={buttonStyle}
          >
            Add Produce
          </button>

          <button
            onClick={() => navigate("/my-products")}
            style={buttonStyle}
          >
            My Products
          </button>

          <button
            onClick={() => navigate("/farmer-orders")}
            style={buttonStyle}
          >
            Orders
          </button>

          <button
            onClick={() => navigate("/farmer-earnings")}
            style={buttonStyle}
          >
            Earnings
          </button>

          <button
            onClick={logout}
            style={{
              ...buttonStyle,
              backgroundColor: "#dc2626",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "30px 20px",
        }}
      >
        {/* Welcome */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "25px",
          }}
        >
          <h1 style={{ color: "#166534" }}>
            Welcome, {user?.name || "Farmer"} 👨‍🌾
          </h1>

          <p>
            Manage your agricultural products, orders and earnings.
          </p>

          <p>
            📍 Location: {user?.location || "Not available"}
          </p>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Products */}
          <div style={cardStyle}>
            <h2>🌱</h2>
            <h3>My Products</h3>
            <h1>{data.products}</h1>

            <button
              onClick={() => navigate("/my-products")}
              style={greenButton}
            >
              View Products
            </button>
          </div>

          {/* Orders */}
          <div style={cardStyle}>
            <h2>📦</h2>
            <h3>Total Orders</h3>
            <h1>{data.total_orders}</h1>

            <button
              onClick={() => navigate("/farmer-orders")}
              style={greenButton}
            >
              View Orders
            </button>
          </div>

          {/* Pending */}
          <div style={cardStyle}>
            <h2>⏳</h2>
            <h3>Pending Orders</h3>
            <h1>{data.pending_orders}</h1>

            <button
              onClick={() => navigate("/farmer-orders")}
              style={greenButton}
            >
              Manage Orders
            </button>
          </div>

          {/* Sales */}
          <div style={cardStyle}>
            <h2>💰</h2>
            <h3>Total Sales</h3>

            <h1>
              ₹{Number(data.total_sales || 0).toLocaleString("en-IN")}
            </h1>

            <button
              onClick={() => navigate("/farmer-earnings")}
              style={greenButton}
            >
              View Earnings
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "25px",
          }}
        >
          <h2 style={{ color: "#166534" }}>
            Quick Actions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            <button
              onClick={() => navigate("/add-produce")}
              style={actionStyle}
            >
              <h2>➕</h2>
              <h3>Add Produce</h3>
              <p>Add your agricultural products</p>
            </button>

            <button
              onClick={() => navigate("/my-products")}
              style={actionStyle}
            >
              <h2>🌾</h2>
              <h3>My Products</h3>
              <p>Manage your products</p>
            </button>

            <button
              onClick={() => navigate("/farmer-orders")}
              style={actionStyle}
            >
              <h2>📦</h2>
              <h3>Orders</h3>
              <p>Check buyer orders</p>
            </button>

            <button
              onClick={() => navigate("/farmer-earnings")}
              style={actionStyle}
            >
              <h2>💰</h2>
              <h3>Earnings</h3>
              <p>Check your earnings</p>
            </button>
          </div>
        </div>

        {/* Profile */}
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "15px",
          }}
        >
          <h2 style={{ color: "#166534" }}>
            👤 Farmer Profile
          </h2>

          <p>
            <strong>Name:</strong>{" "}
            {user?.name || "Not available"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user?.email || "Not available"}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {user?.phone || "Not available"}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {user?.location || "Not available"}
          </p>

          <p>
            <strong>Farmer ID:</strong>{" "}
            {user?.id || "Not available"}
          </p>

          <p>
            <strong>Account Type:</strong> Farmer 👨‍🌾
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#14532d",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <p>🌾 AGRI CONNECT</p>
        <p>Direct Farmer-to-Buyer Marketplace</p>
      </footer>
    </div>
  );
}

/* Button Style */
const buttonStyle = {
  backgroundColor: "transparent",
  color: "white",
  border: "1px solid white",
  padding: "8px 12px",
  margin: "3px",
  borderRadius: "6px",
  cursor: "pointer",
};

/* Card Style */
const cardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

/* Green Button */
const greenButton = {
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "6px",
  cursor: "pointer",
};

/* Action Card */
const actionStyle = {
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
  padding: "20px",
  borderRadius: "12px",
  cursor: "pointer",
};

export default FarmerDashboard;