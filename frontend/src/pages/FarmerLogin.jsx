import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "./API";
import "./FarmerAuth.css";

function FarmerLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/farmer/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password: password,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed.");
      }

      if (
        !result.user ||
        !result.user.id ||
        result.user.role !== "farmer"
      ) {
        throw new Error("Invalid farmer account response.");
      }

      // Save logged-in farmer details
      localStorage.setItem("user", JSON.stringify(result.user));

      // Open Farmer Dashboard
      navigate("/farmer-dashboard", { replace: true });

    } catch (err) {
      setError(err.message || "Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="farmer-auth-page">

      <div className="auth-left-panel">
        <div className="auth-brand">
          <span className="brand-icon">🌾</span>
          <span>AGRI<span>CONNECT</span></span>
        </div>

        <div className="auth-left-content">
          <span className="auth-tag">WELCOME BACK</span>

          <h1>
            Welcome<br />
            Back to<br />
            <span>Your Farm.</span>
          </h1>

          <p>
            Manage your farm, track your products and connect
            with buyers from one simple platform.
          </p>

          <div className="auth-benefit">
            <span>✓</span> Your products in one place
          </div>

          <div className="auth-benefit">
            <span>✓</span> Track orders and sales
          </div>

          <div className="auth-benefit">
            <span>✓</span> Grow your marketplace
          </div>
        </div>

        <div className="auth-left-footer">
          Empowering Farmers • Building Better Markets
        </div>
      </div>

      <div className="auth-right-panel">
        <div className="auth-form-card login-card">

          <div className="mobile-brand">
            🌾 AGRI CONNECT
          </div>

          <div className="form-heading">
            <span className="form-label">FARMER PORTAL</span>
            <h2>Farmer Login</h2>
            <p>Login to access your farmer dashboard.</p>
          </div>

          {error && <div className="auth-message error">{error}</div>}

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Login to Dashboard →"}
            </button>

          </form>

          <div className="auth-bottom-text">
            Don't have an account?
            <Link to="/farmer-signup"> Create Account</Link>
          </div>

          <Link to="/" className="auth-back-home">
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default FarmerLogin;