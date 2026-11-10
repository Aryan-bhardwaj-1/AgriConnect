import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FarmerSignup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSignup(e) {
    e.preventDefault();

    if (
      !form.name ||
      !form.mobile ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Farmer Account Created Successfully!");

    navigate("/farmer-login");
  }

  return (
    <div className="auth-page">

      <div className="auth-card signup-card">

        <div className="auth-logo">
          🌾 <span>AGRI-CONNECT</span>
        </div>

        <h1>Farmer Signup</h1>

        <p className="auth-subtitle">
          Create your farmer account
        </p>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">
            Create Farmer Account
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/farmer-login">
            Login
          </Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default FarmerSignup;
