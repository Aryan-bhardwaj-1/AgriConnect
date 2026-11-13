
import React, { useState } from "react";

function BuyerDashboard() {
  const [search, setSearch] = useState("");

  const products = [
    { name: "Fresh Wheat", category: "Grains", price: "₹28/kg", icon: "🌾", quantity: "500 kg available" },
    { name: "Organic Rice", category: "Rice", price: "₹45/kg", icon: "🍚", quantity: "800 kg available" },
    { name: "Fresh Tomatoes", category: "Vegetables", price: "₹25/kg", icon: "🍅", quantity: "300 kg available" },
    { name: "Potatoes", category: "Vegetables", price: "₹20/kg", icon: "🥔", quantity: "600 kg available" },
    { name: "Fresh Onions", category: "Vegetables", price: "₹30/kg", icon: "🧅", quantity: "400 kg available" },
    { name: "Mustard Seeds", category: "Seeds", price: "₹65/kg", icon: "🌱", quantity: "250 kg available" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f4f8f3",
      fontFamily: "Arial, sans-serif",
      color: "#243b2c",
    },
    nav: {
      background: "#14532d",
      color: "white",
      padding: "18px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
    },
    button: {
      background: "#ffffff",
      color: "#14532d",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "30px 20px",
    },
    card: {
      background: "white",
      padding: "22px",
      borderRadius: "14px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    },
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <h2 style={{ margin: 0 }}>🌿 Agri Connect</h2>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/search-products" style={{ color: "white", textDecoration: "none" }}>Marketplace</a>
          <a href="/bulk-order" style={{ color: "white", textDecoration: "none" }}>Bulk Orders</a>
          <a href="/order-tracking" style={{ color: "white", textDecoration: "none" }}>Track Orders</a>
          <button style={styles.button}>Buyer Account</button>
        </div>
      </nav>

      <main style={styles.container}>
        <section style={{
          background: "linear-gradient(120deg, #14532d, #39965a)",
          color: "white",
          padding: "35px",
          borderRadius: "18px",
          marginBottom: "28px",
        }}>
          <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
            Welcome to Agri Connect! 🌱
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
            Discover fresh agricultural products and buy directly from farmers.
            Better prices, trusted connections and fresh produce.
          </p>
          <a href="/search-products">
            <button style={{
              background: "#facc15",
              color: "#26351f",
              border: "none",
              padding: "12px 22px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}>
              Explore Marketplace →
            </button>
          </a>
        </section>

        <h2>📊 Your Overview</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "18px",
          margin: "20px 0 35px",
        }}>
          {[
            ["🛒", "Total Orders", "12"],
            ["📦", "Active Orders", "04"],
            ["❤️", "Saved Products", "08"],
            ["🚜", "Connected Farmers", "15"],
          ].map((item) => (
            <div key={item[1]} style={styles.card}>
              <div style={{ fontSize: "28px" }}>{item[0]}</div>
              <p style={{ color: "#718071" }}>{item[1]}</p>
              <h2 style={{ margin: 0, color: "#166534" }}>{item[2]}</h2>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: "35px" }}>
          <h2>⚡ Quick Actions</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
            marginTop: "18px",
          }}>
            {[
              ["🔍", "Find Products", "/search-products"],
              ["📦", "Place Bulk Order", "/bulk-order"],
              ["🚚", "Track Your Order", "/order-tracking"],
              ["🤝", "Smart Matching", "/smart-matching"],
            ].map((item) => (
              <a key={item[1]} href={item[2]} style={{
                ...styles.card,
                textDecoration: "none",
                color: "#14532d",
                fontWeight: "bold",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "30px" }}>{item[0]}</div>
                <p>{item[1]} →</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}>
            <h2>🌾 Fresh From Farmers</h2>
            <a href="/search-products" style={{ color: "#15803d", fontWeight: "bold" }}>
              View All →
            </a>
          </div>

          <input
            type="text"
            placeholder="Search wheat, rice, tomatoes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px",
              border: "1px solid #d1dfd1",
              borderRadius: "10px",
              margin: "15px 0 22px",
              fontSize: "15px",
            }}
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}>
            {filteredProducts.map((product) => (
              <div key={product.name} style={styles.card}>
                <div style={{
                  background: "#eff8ed",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  fontSize: "55px",
                }}>
                  {product.icon}
                </div>
                <p style={{ color: "#718071", marginBottom: "5px" }}>
                  {product.category}
                </p>
                <h3 style={{ margin: "5px 0" }}>{product.name}</h3>
                <p style={{ color: "#718071", fontSize: "13px" }}>
                  {product.quantity}
                </p>
                <h3 style={{ color: "#15803d" }}>{product.price}</h3>
                <a href="/search-products">
                  <button style={{
                    width: "100%",
                    padding: "11px",
                    background: "#15803d",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}>
                    View Product
                  </button>
                </a>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p style={{ textAlign: "center", padding: "25px" }}>
              No products found. Try another search.
            </p>
          )}
        </section>

        <footer style={{
          textAlign: "center",
          padding: "30px 10px",
          marginTop: "40px",
          borderTop: "1px solid #dce8dc",
          color: "#718071",
        }}>
          © 2026 Agri Connect | Connecting Farmers with Buyers 🌱
        </footer>
      </main>
    </div>
  );
}

export default BuyerDashboard;
