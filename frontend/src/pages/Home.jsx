import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-tag">
            🌱 Empowering Indian Farmers
          </div>

          <h1 className="hero-title">
            Connecting Farmers
            <br />
            to a Better Connect 🌱
          </h1>

          <p className="hero-description">
            AgriConnect helps farmers connect with markets,
            buyers and agricultural services easily and directly.
          </p>

          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() => navigate("/farmer-login")}
            >
              Farmer Login
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/farmer-signup")}
            >
              Create Account
            </button>

          </div>

        </div>

        <div className="hero-image">
          <div className="farmer-illustration">
            👨‍🌾🌾
          </div>
        </div>

      </section>


      {/* Why AgriConnect */}
      <section className="why-section">

        <h2 className="section-title">
          Why AgriConnect?
        </h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>Direct Market</h3>
            <p>
              Farmers can sell their products directly to buyers.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Better Farming</h3>
            <p>
              Get useful agricultural information and services.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Fair Prices</h3>
            <p>
              Better prices by reducing unnecessary middlemen.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Connect with Buyers</h3>
            <p>
              Easily connect with customers looking for farm products.
            </p>
          </div>

        </div>

      </section>


      {/* Statistics */}
      <section className="stats-section">

        <div className="stat">
          <h2>10K+</h2>
          <p>Farmers</p>
        </div>

        <div className="stat">
          <h2>50K+</h2>
          <p>Buyers</p>
        </div>

        <div className="stat">
          <h2>25K+</h2>
          <p>Products</p>
        </div>

        <div className="stat">
          <h2>4.9★</h2>
          <p>User Rating</p>
        </div>

      </section>

    </div>
  );
}

export default Home;
