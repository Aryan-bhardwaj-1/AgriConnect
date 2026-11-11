import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "./API";
import "./FarmerAuth.css";

function FarmerSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/farmer/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.mobile.trim(),
            email: form.email.trim().toLowerCase(),
            password: form.password,
            location: form.location.trim(),
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Signup failed.");
      }

      setSuccess("Account created successfully! Redirecting to login...");

      setTimeout(() => {
        navigate("/farmer-login");
      }, 1500);

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
          <span className="auth-tag">GROW TOGETHER</span>

          <h1>
            Your Farm.<br />
            Your Future.<br />
            <span>Your Marketplace.</span>
          </h1>

          <p>
            Connect directly with buyers, manage your agricultural
            products and grow your farming business.
          </p>

          <div className="auth-benefit">
            <span>✓</span> Direct connection with buyers
          </div>

          <div className="auth-benefit">
            <span>✓</span> Manage your products easily
          </div>

          <div className="auth-benefit">
            <span>✓</span> Grow your business digitally
          </div>
        </div>

        <div className="auth-left-footer">
          Empowering Farmers • Building Better Markets
        </div>
      </div>

      <div className="auth-right-panel">
        <div className="auth-form-card">

          <div className="mobile-brand">
            🌾 AGRI CONNECT
          </div>

          <div className="form-heading">
            <span className="form-label">JOIN OUR COMMUNITY</span>
            <h2>Create Farmer Account</h2>
            <p>Enter your details to get started.</p>
          </div>

          {error && <div className="auth-message error">{error}</div>}
          {success && <div className="auth-message success">{success}</div>}

          <form onSubmit={handleSignup}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="10-digit mobile number"
                value={form.mobile}
                onChange={handleChange}
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Farm Location</label>
              <input
                type="text"
                name="location"
                placeholder="Village, District, State"
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Create Password</label>
              <input
                type="password"
                name="password"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter password again"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Farmer Account →"}
            </button>

          </form>

          <div className="auth-bottom-text">
            Already have an account?
            <Link to="/farmer-login"> Login</Link>
          </div>

          <Link to="/" className="auth-back-home">
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default FarmerSignup;