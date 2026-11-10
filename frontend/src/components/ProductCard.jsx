import React from "react";

function ProductCard({
  productName = "Fresh Wheat",
  category = "Grains",
  price = "₹32",
  unit = "Kg",
  quantity = "500 Kg",
  farmerName = "Rajesh Kumar",
  location = "Basti, Uttar Pradesh",
  emoji = "🌾",
}) {
  return (
    <>
      <style>{`
        .product-card {
          width: 100%;
          max-width: 300px;
          background: #ffffff;
          border: 1px solid #e5ebe6;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
          transition: 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .product-image {
          height: 190px;
          background: #f1f8f1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .product-emoji {
          font-size: 85px;
        }

        .category {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #2e7d32;
          color: white;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .verified {
          position: absolute;
          top: 12px;
          right: 12px;
          background: white;
          color: #2e7d32;
          padding: 6px 9px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .product-content {
          padding: 18px;
        }

        .product-content h2 {
          color: #173d24;
          font-size: 19px;
          margin: 0 0 8px;
        }

        .farmer {
          color: #777;
          font-size: 12px;
          margin-bottom: 5px;
        }

        .location {
          color: #888;
          font-size: 12px;
          margin-bottom: 15px;
        }

        .product-info {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
        }

        .info-item span {
          display: block;
          color: #999;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .info-item strong {
          color: #333;
          font-size: 13px;
        }

        .price-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
        }

        .price {
          color: #2e7d32;
          font-size: 21px;
          font-weight: 800;
        }

        .price small {
          color: #777;
          font-size: 11px;
          font-weight: normal;
        }

        .buy-btn {
          border: none;
          background: #2e7d32;
          color: white;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: 0.3s;
        }

        .buy-btn:hover {
          background: #256b29;
        }

        @media (max-width: 500px) {
          .product-card {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="product-card">

        {/* PRODUCT IMAGE */}
        <div className="product-image">

          <span className="category">
            {category}
          </span>

          <span className="verified">
            ✓ Verified
          </span>

          <div className="product-emoji">
            {emoji}
          </div>

        </div>

        {/* PRODUCT CONTENT */}
        <div className="product-content">

          <h2>{productName}</h2>

          <div className="farmer">
            👨‍🌾 {farmerName}
          </div>

          <div className="location">
            📍 {location}
          </div>

          {/* PRODUCT INFO */}
          <div className="product-info">

            <div className="info-item">
              <span>Available</span>
              <strong>{quantity}</strong>
            </div>

            <div className="info-item">
              <span>Quality</span>
              <strong>Premium</strong>
            </div>

          </div>

          {/* PRICE */}
          <div className="price-section">

            <div className="price">
              {price}
              <small> / {unit}</small>
            </div>

            <button
              className="buy-btn"
              onClick={() =>
                alert(`Added ${productName} to cart`)
              }
            >
              🛒 Buy Now
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default ProductCard;
