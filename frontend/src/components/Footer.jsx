import React from "react";

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #123d25;
          color: white;
          padding: 50px 7% 20px;
          margin-top: 50px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          max-width: 1300px;
          margin: auto;
        }

        .footer-logo {
          font-size: 25px;
          font-weight: bold;
          color: #b7f397;
          margin-bottom: 15px;
        }

        .footer-about {
          color: #c9d8ce;
          line-height: 1.7;
          max-width: 400px;
          font-size: 14px;
        }

        .footer h3 {
          font-size: 17px;
          margin-bottom: 18px;
          color: #ffffff;
        }

        .footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin-bottom: 11px;
        }

        .footer ul li a {
          text-decoration: none;
          color: #c9d8ce;
          font-size: 14px;
          transition: 0.3s;
        }

        .footer ul li a:hover {
          color: #b7f397;
          padding-left: 5px;
        }

        .footer-contact p {
          color: #c9d8ce;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 18px;
        }

        .social-icons a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #245b36;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          font-size: 18px;
          transition: 0.3s;
        }

        .social-icons a:hover {
          background: #4caf50;
          transform: translateY(-3px);
        }

        .footer-bottom {
          max-width: 1300px;
          margin: 35px auto 0;
          padding-top: 20px;
          border-top: 1px solid #31553d;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #aebfb3;
          font-size: 13px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-links a {
          color: #aebfb3;
          text-decoration: none;
        }

        .footer-bottom-links a:hover {
          color: #b7f397;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <footer className="footer">

        <div className="footer-container">

          {/* About */}
          <div>
            <div className="footer-logo">
              🌾 AGRI-CONNECT
            </div>

            <p className="footer-about">
              AGRI-CONNECT connects farmers directly with consumers
              and bulk buyers. Sell your agricultural products at
              better prices and build a stronger digital farming
              community.
            </p>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/products">Products</a>
              </li>

              <li>
                <a href="/farmers">Farmers</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Farmer */}
          <div>
            <h3>For Farmers</h3>

            <ul>
              <li>
                <a href="/farmer-login">Farmer Login</a>
              </li>

              <li>
                <a href="/farmer-register">Register</a>
              </li>

              <li>
                <a href="/farmer/products">My Products</a>
              </li>

              <li>
                <a href="/farmer/orders">My Orders</a>
              </li>

              <li>
                <a href="/farmer/earnings">My Earnings</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>📍 Uttar Pradesh, India</p>
            <p>📧 support@AGRI-CONNECT.com</p>
            <p>📞 +91 98765 43210</p>
            <p>🕐 Mon - Sat: 9 AM - 6 PM</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} AGRI-CONNECT. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;
