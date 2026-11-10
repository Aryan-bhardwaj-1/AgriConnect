import React from "react";

function MatchCard({
  farmerName = "Rajesh Kumar",
  product = "Wheat",
  quantity = "500 Kg",
  price = "₹32/Kg",
  location = "Basti, Uttar Pradesh",
  match = "95%",
}) {
  return (
    <>
      <style>{`
        .match-card {
          width: 100%;
          max-width: 380px;
          background: #ffffff;
          border: 1px solid #e5ebe6;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .match-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .match-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .match-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .farmer-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #e8f5e9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .match-title h3 {
          margin: 0;
          color: #173d24;
          font-size: 17px;
        }

        .match-title p {
          margin: 4px 0 0;
          color: #777;
          font-size: 12px;
        }

        .match-score {
          background: #e8f5e9;
          color: #2e7d32;
          padding: 7px 10px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: bold;
        }

        .product-box {
          background: #f7faf7;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 18px;
        }

        .product-name {
          font-size: 20px;
          font-weight: bold;
          color: #173d24;
          margin-bottom: 12px;
        }

        .product-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .detail {
          font-size: 13px;
          color: #777;
        }

        .detail strong {
          display: block;
          color: #333;
          margin-top: 3px;
        }

        .location {
          color: #666;
          font-size: 13px;
          margin-bottom: 18px;
        }

        .match-actions {
          display: flex;
          gap: 10px;
        }

        .view-btn,
        .contact-btn {
          flex: 1;
          padding: 11px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
        }

        .view-btn {
          background: white;
          border: 1px solid #4caf50;
          color: #2e7d32;
        }

        .contact-btn {
          background: #2e7d32;
          border: 1px solid #2e7d32;
          color: white;
        }

        .view-btn:hover {
          background: #e8f5e9;
        }

        .contact-btn:hover {
          background: #256b29;
        }

        @media (max-width: 500px) {
          .match-card {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="match-card">

        {/* Top */}
        <div className="match-top">

          <div className="match-title">
            <div className="farmer-icon">
              👨‍🌾
            </div>

            <div>
              <h3>{farmerName}</h3>
              <p>Verified Farmer ✓</p>
            </div>
          </div>

          <div className="match-score">
            {match} Match
          </div>

        </div>

        {/* Product */}
        <div className="product-box">

          <div className="product-name">
            🌾 {product}
          </div>

          <div className="product-details">

            <div className="detail">
              Available
              <strong>{quantity}</strong>
            </div>

            <div className="detail">
              Price
              <strong>{price}</strong>
            </div>

          </div>

        </div>

        {/* Location */}
        <div className="location">
          📍 {location}
        </div>

        {/* Buttons */}
        <div className="match-actions">

          <button
            className="view-btn"
            onClick={() => alert(`Viewing ${product} details`)}
          >
            View Details
          </button>

          <button
            className="contact-btn"
            onClick={() => alert(`Contacting ${farmerName}`)}
          >
            Contact Farmer
          </button>

        </div>

      </div>
    </>
  );
}

export default MatchCard;
