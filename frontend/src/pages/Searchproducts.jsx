
import React, { useState } from "react";

function Searchproducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const products = [
    { id: 1, name: "Fresh Wheat", category: "Grains", price: 28, quantity: "500 kg", farmer: "Ramesh Kumar", location: "Azamgarh, UP", emoji: "🌾" },
    { id: 2, name: "Organic Rice", category: "Grains", price: 45, quantity: "800 kg", farmer: "Suresh Singh", location: "Basti, UP", emoji: "🍚" },
    { id: 3, name: "Fresh Tomatoes", category: "Vegetables", price: 25, quantity: "300 kg", farmer: "Amit Yadav", location: "Gorakhpur, UP", emoji: "🍅" },
    { id: 4, name: "Potatoes", category: "Vegetables", price: 20, quantity: "600 kg", farmer: "Rajesh Patel", location: "Lucknow, UP", emoji: "🥔" },
    { id: 5, name: "Fresh Onions", category: "Vegetables", price: 30, quantity: "400 kg", farmer: "Vikas Singh", location: "Jaunpur, UP", emoji: "🧅" },
    { id: 6, name: "Mustard Seeds", category: "Seeds", price: 65, quantity: "250 kg", farmer: "Deepak Verma", location: "Varanasi, UP", emoji: "🌱" },
    { id: 7, name: "Fresh Carrots", category: "Vegetables", price: 35, quantity: "200 kg", farmer: "Anil Kumar", location: "Prayagraj, UP", emoji: "🥕" },
    { id: 8, name: "Green Peas", category: "Vegetables", price: 40, quantity: "150 kg", farmer: "Sunil Yadav", location: "Basti, UP", emoji: "🫛" },
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.farmer.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f4f8f3",
      fontFamily: "Arial, sans-serif",
      color: "#263b2c",
    },
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "30px 20px",
    },
    card: {
      background: "white",
      padding: "18px",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
    },
  };

  return (
    <div style={styles.page}>

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
          <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="/buyer-dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</a>
          <a href="/bulk-order" style={{ color: "white", textDecoration: "none" }}>Bulk Orders</a>
          <a href="/order-tracking" style={{ color: "white", textDecoration: "none" }}>Track Orders</a>
        </div>
      </nav>

      <main style={styles.container}>

        {/* Hero */}
        <section style={{
          background: "linear-gradient(120deg, #14532d, #39965a)",
          color: "white",
          padding: "35px",
          borderRadius: "18px",
          marginBottom: "28px",
        }}>
          <h1 style={{ fontSize: "30px" }}>
            🌾 Explore Fresh Farm Products
          </h1>
          <p style={{ lineHeight: 1.7 }}>
            Discover quality agricultural products directly from farmers.
            Search, compare prices and connect with trusted sellers.
          </p>
        </section>

        {/* Search */}
        <section style={styles.card}>
          <h2>🔍 Find Your Products</h2>

          <input
            type="text"
            placeholder="Search wheat, rice, vegetables or farmer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "15px",
              border: "1px solid #d5e2d5",
              borderRadius: "10px",
              fontSize: "15px",
              margin: "12px 0",
            }}
          />

          <div style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "10px",
          }}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d5e2d5",
                minWidth: "180px",
              }}
            >
              <option value="All">All Categories</option>
              <option value="Grains">Grains</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Seeds">Seeds</option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #d5e2d5",
                minWidth: "180px",
              }}
            >
              <option value="default">Sort By: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSort("default");
              }}
              style={{
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                background: "#e7f3e8",
                color: "#14532d",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Reset Filters
            </button>
          </div>
        </section>

        {/* Products */}
        <section style={{ marginTop: "30px" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <h2>🌱 Available Products</h2>
            <span style={{ color: "#647568" }}>
              {filteredProducts.length} Products Found
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={styles.card}>

                <div style={{
                  background: "#eff8ed",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  fontSize: "60px",
                }}>
                  {product.emoji}
                </div>

                <p style={{ color: "#718071", fontSize: "13px" }}>
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <h2 style={{ color: "#15803d" }}>
                  ₹{product.price}<small style={{ fontSize: "13px" }}>/kg</small>
                </h2>

                <p>📦 Available: {product.quantity}</p>
                <p>👨‍🌾 Farmer: {product.farmer}</p>
                <p>📍 {product.location}</p>

                <button
                  onClick={() => alert(`You selected ${product.name}. Please contact the farmer to place an order.`)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "#15803d",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  View / Contact Farmer →
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{
              ...styles.card,
              textAlign: "center",
              marginTop: "20px",
              padding: "40px",
            }}>
              <h2>🔎 No Products Found</h2>
              <p>Try searching with another product name.</p>
            </div>
          )}
        </section>

        <footer style={{
          textAlign: "center",
          padding: "30px 10px",
          marginTop: "40px",
          color: "#718071",
          borderTop: "1px solid #dce8dc",
        }}>
          © 2026 Agri Connect | Connecting Farmers with Buyers 🌿
        </footer>

      </main>
    </div>
  );
}

export default Searchproducts;