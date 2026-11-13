
import React, { useState } from "react";

function FarmerOrders() {
  const [activeTab, setActiveTab] = useState("All");
  const [orders, setOrders] = useState([
    {
      id: "ORD1001",
      buyer: "Rahul Traders",
      product: "Organic Wheat",
      quantity: "500 kg",
      amount: 14000,
      date: "13 Nov 2026",
      status: "Pending",
      location: "Azamgarh, UP",
      payment: "Pending",
    },
    {
      id: "ORD1002",
      buyer: "Green Mart",
      product: "Fresh Tomatoes",
      quantity: "200 kg",
      amount: 5000,
      date: "12 Nov 2026",
      status: "Accepted",
      location: "Gorakhpur, UP",
      payment: "Paid",
    },
    {
      id: "ORD1003",
      buyer: "Sharma Wholesale",
      product: "Premium Rice",
      quantity: "300 kg",
      amount: 13500,
      date: "11 Nov 2026",
      status: "Completed",
      location: "Basti, UP",
      payment: "Paid",
    },
    {
      id: "ORD1004",
      buyer: "Fresh Basket",
      product: "Potatoes",
      quantity: "400 kg",
      amount: 8000,
      date: "10 Nov 2026",
      status: "Pending",
      location: "Lucknow, UP",
      payment: "Pending",
    },
  ]);

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const tabs = ["All", "Pending", "Accepted", "Completed", "Rejected"];

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  const totalRevenue = orders
    .filter((order) => order.status === "Completed")
    .reduce((sum, order) => sum + order.amount, 0);

  const pendingCount = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const card = {
    background: "#fff",
    padding: "22px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  };

  const statusStyle = (status) => {
    const colors = {
      Pending: ["#fff7e6", "#b7791f"],
      Accepted: ["#e6f4ff", "#1670b7"],
      Completed: ["#e8f8ed", "#188344"],
      Rejected: ["#ffe9e9", "#d14343"],
    };

    return {
      background: colors[status][0],
      color: colors[status][1],
      padding: "7px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
    };
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f8f3",
      fontFamily: "Arial, sans-serif",
      color: "#243b2c",
    }}>

      {/* Navbar */}
      <nav style={{
        background: "#14532d",
        color: "white",
        padding: "18px 5%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}>
        <h2 style={{ margin: 0 }}>🌿 Agri Connect</h2>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a href="/farmer-dashboard" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </a>
          <a href="/add-produce" style={{ color: "white", textDecoration: "none" }}>
            Add Produce
          </a>
          <a href="/my-products" style={{ color: "white", textDecoration: "none" }}>
            My Products
          </a>
          <a href="/farmer-earnings" style={{ color: "white", textDecoration: "none" }}>
            Earnings
          </a>
        </div>
      </nav>

      <main style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "30px 20px",
      }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(120deg, #14532d, #39965a)",
          color: "white",
          padding: "30px",
          borderRadius: "18px",
          marginBottom: "28px",
        }}>
          <h1 style={{ marginTop: 0 }}>📦 Manage Your Orders</h1>
          <p style={{ lineHeight: 1.6 }}>
            Welcome, Farmer! Manage buyer requests, track deliveries
            and grow your agricultural business.
          </p>
        </div>

        {/* Statistics */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "18px",
          marginBottom: "30px",
        }}>
          {[
            ["📋", "Total Orders", orders.length],
            ["⏳", "Pending Orders", pendingCount],
            ["🚚", "Accepted Orders", orders.filter(o => o.status === "Accepted").length],
            ["💰", "Completed Revenue", `₹${totalRevenue.toLocaleString("en-IN")}`],
          ].map((item) => (
            <div key={item[1]} style={card}>
              <div style={{ fontSize: "28px" }}>{item[0]}</div>
              <p style={{ color: "#718071" }}>{item[1]}</p>
              <h2 style={{ color: "#15803d", margin: 0 }}>{item[2]}</h2>
            </div>
          ))}
        </div>

        {/* Filters */}
        <section style={card}>
          <h2>My Orders</h2>

          <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            margin: "20px 0",
          }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: activeTab === tab ? "#15803d" : "#edf4ed",
                  color: activeTab === tab ? "white" : "#34523b",
                  fontWeight: "bold",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders */}
          <div style={{ display: "grid", gap: "18px" }}>
            {filteredOrders.map((order) => (
              <div key={order.id} style={{
                border: "1px solid #e5eee5",
                borderRadius: "13px",
                padding: "20px",
                background: "#fff",
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}>
                  <div>
                    <h3 style={{ margin: "0 0 6px" }}>
                      {order.product}
                    </h3>
                    <span style={{ color: "#718071", fontSize: "13px" }}>
                      Order ID: {order.id}
                    </span>
                  </div>

                  <span style={statusStyle(order.status)}>
                    {order.status}
                  </span>
                </div>

                <hr style={{ border: 0, borderTop: "1px solid #edf1ed", margin: "18px 0" }} />

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: "15px",
                }}>
                  <div>
                    <small style={{ color: "#718071" }}>Buyer</small>
                    <p><strong>{order.buyer}</strong></p>
                  </div>

                  <div>
                    <small style={{ color: "#718071" }}>Quantity</small>
                    <p><strong>{order.quantity}</strong></p>
                  </div>

                  <div>
                    <small style={{ color: "#718071" }}>Order Amount</small>
                    <p style={{ color: "#15803d" }}>
                      <strong>₹{order.amount.toLocaleString("en-IN")}</strong>
                    </p>
                  </div>

                  <div>
                    <small style={{ color: "#718071" }}>Order Date</small>
                    <p><strong>{order.date}</strong></p>
                  </div>

                  <div>
                    <small style={{ color: "#718071" }}>Delivery Location</small>
                    <p><strong>{order.location}</strong></p>
                  </div>

                  <div>
                    <small style={{ color: "#718071" }}>Payment</small>
                    <p><strong>{order.payment}</strong></p>
                  </div>
                </div>

                {order.status === "Pending" && (
                  <div style={{ display: "flex", gap: "10px", marginTop: "15px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => updateStatus(order.id, "Accepted")}
                      style={{
                        background: "#15803d",
                        color: "white",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "7px",
                        cursor: "pointer",
                      }}
                    >
                      ✓ Accept Order
                    </button>

                    <button
                      onClick={() => updateStatus(order.id, "Rejected")}
                      style={{
                        background: "#fee2e2",
                        color: "#b91c1c",
                        border: "none",
                        padding: "10px 18px",
                        borderRadius: "7px",
                        cursor: "pointer",
                      }}
                    >
                      ✕ Reject Order
                    </button>
                  </div>
                )}

                {order.status === "Accepted" && (
                  <button
                    onClick={() => updateStatus(order.id, "Completed")}
                    style={{
                      marginTop: "15px",
                      background: "#15803d",
                      color: "white",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "7px",
                      cursor: "pointer",
                    }}
                  >
                    ✓ Mark as Completed
                  </button>
                )}
              </div>
            ))}

            {filteredOrders.length === 0 && (
              <div style={{ textAlign: "center", padding: "35px" }}>
                <h3>📭 No Orders Found</h3>
                <p>There are no {activeTab.toLowerCase()} orders right now.</p>
              </div>
            )}
          </div>
        </section>

        <footer style={{
          textAlign: "center",
          padding: "30px 10px",
          color: "#718071",
        }}>
          © 2026 Agri Connect | Empowering Farmers 🌱
        </footer>

      </main>
    </div>
  );
}

export default FarmerOrders;