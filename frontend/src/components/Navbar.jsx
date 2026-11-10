import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .navbar {
          width: 100%;
          height: 70px;
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #e8f5e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .logo-text {
          font-size: 21px;
          font-weight: 800;
          color: #174d2a;
        }

        .logo-text span {
          color: #4caf50;
        }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #2e7d32;
        }

        .nav-links a.active {
          color: #2e7d32;
        }

        /* BUTTONS */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .login-btn,
        .signup-btn {
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .login-btn {
          color: #2e7d32;
          background: #ffffff;
          border: 1px solid #2e7d32;
        }

        .signup-btn {
          color: #ffffff;
          background: #2e7d32;
          border: 1px solid #2e7d32;
        }

        .login-btn:hover {
          background: #e8f5e9;
        }

        .signup-btn:hover {
          background: #256b29;
        }

        /* MOBILE BUTTON */
        .menu-btn {
          display: none;
          border: none;
          background: #e8f5e9;
          color: #174d2a;
          font-size: 24px;
          width: 42px;
          height: 42px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .nav-links,
          .nav-actions {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .mobile-menu {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: white;
            padding: 20px;
            border-bottom: 1px solid #ddd;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          }

          .mobile-menu a {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 13px 5px;
            font-weight: 600;
            border-bottom: 1px solid #eee;
          }

          .mobile-menu a:hover {
            color: #2e7d32;
          }

          .mobile-buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
          }

          .mobile-buttons a {
            flex: 1;
            text-align: center;
            border: none;
          }
        }

        @media (max-width: 500px) {
          .navbar {
            padding: 0 18px;
          }

          .logo-text {
            font-size: 18px;
          }

          .logo-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>

      <nav className="navbar">

        {/* LOGO */}
        <a href="/" className="nav-logo">

          <div className="logo-icon">
            🌾
          </div>

          <div className="logo-text">
            AGRI <span>CONNECT</span>
          </div>

        </a>

        {/* DESKTOP LINKS */}
        <div className="nav-links">

          <a href="/" className="active">
            Home
          </a>

          <a href="/products">
            Products
          </a>

          <a href="/farmers">
            Farmers
          </a>

          <a href="/about">
            About Us
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

        {/* DESKTOP BUTTONS */}
        <div className="nav-actions">

          <a href="/login" className="login-btn">
            Login
          </a>

          <a href="/register" className="signup-btn">
            Sign Up
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">

            <a href="/">🏠 Home</a>

            <a href="/products">🌾 Products</a>

            <a href="/farmers">👨‍🌾 Farmers</a>

            <a href="/about">ℹ️ About Us</a>

            <a href="/contact">📞 Contact</a>

            <div className="mobile-buttons">

              <a href="/login" className="login-btn">
                Login
              </a>

              <a href="/register" className="signup-btn">
                Sign Up
              </a>

            </div>

          </div>
        )}

      </nav>
    </>
  );
}

export default Navbar;