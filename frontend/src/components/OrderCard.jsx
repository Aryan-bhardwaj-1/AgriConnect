import React from "react";

function OrderCard({
  orderId = "#ORD001",
  product = "Wheat",
  farmerName = "Rajesh Kumar",
  quantity = "100 Kg",
  price = "₹32/Kg",
  total = "₹3,200",
  date = "09 Sep 2026",
  status = "Delivered",
}) {
  const statusClass =
    status === "Delivered"
      ? "delivered"
      : status === "Pending"
      ? "pending"
      : status === "Cancelled"
      ? "cancelled"
      : "processing";

  return (
    <>
      <style>{`
        .order-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e5ebe6;
          border-radius: 16px;
          padding: 22px;
          margin-bottom: 18px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          transition: 0.3s ease;
        }

        .order-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.10);
        }

        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid #eeeeee;
        }

        .order-id {
          color: #777;
          font-size: 13px;
        }

        .order-date {
          color: #999;
          font-size: 12px;
          margin-top: 4px;
        }

        .order-status {
          padding: 7px 13px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .delivered {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .pending {
          background: #fff8e1;
          color: #b77900;
        }

        .processing {
          background: #e3f2fd;
          color: #1976d2;
        }

        .cancelled {
          background: #ffebee;
          color: #d32f2f;
        }

        .order-body {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 20px;
          align-items: center;
          padding: 20px 0;
        }

        .product-info {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .product-icon {
          width: 55px;
          height: 55px;
          border-radius: 12px;
          background: #f1f8f1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .product-info h3 {
          margin: 0;
          color: #173d24;
          font-size: 17px;
        }

        .product-info p {
          margin: 5px 0 0;
          color: #777;
          font-size: 12px;
        }

        .order-detail {
          color: #888;
          font-size: 12px;
        }

        .order-detail strong {
          display: block;
          color: #333;
          font-size: 14px;
          margin-top: 5px;
        }

        .order-total {
          text-align: right;
        }

        .order-total span {
          color: #888;
          font-size: 12px;
        }

        .order-total h3 {
          color: #2e7d32;
          margin-top: 5px;
        }

        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #eeeeee;
        }

        .farmer-name {
          color: #666;
          font-size: 13px;
        }

        .order-actions {
          display: flex;
          gap: 10px;
        }

        .details-btn,
        .track-btn {
          padding: 9px 15px;
          border-radius: 7px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
        }

        .details-btn {
          background: white;
          border: 1px solid #2e7d32;
          color: #2e7d32;
        }

        .track-btn {
          background: #2e7d32;
          border: 1px solid #2e7d32;
          color: white;
        }

        .details-btn:hover {
          background: #e8f5e9;
        }

        .track-btn:hover {
          background: #256b29;
        }

        @media (max-width: 800px) {
          .order-body {
            grid-template-columns: 1fr 1fr;
          }

          .order-total {
            text-align: left;
          }
        }

        @media (max-width: 500px) {
          .order-header,
          .order-footer {
            align-items: flex-start;
            gap: 12px;
            flex-direction: column;
          }

          .order-body {
            grid-template-columns: 1fr;
          }

          .order-actions {
            width: 100%;
          }

          .details-btn,
          .track-btn {
            flex: 1;
          }
        }
      `}</style>

      <div className="order-card">

        {/* HEADER */}
        <div className="order-header">

          <div>
            <div className="order-id">
              Order ID: <strong>{orderId}</strong>
            </div>

            <div className="order-date">
              📅 {date}
            </div>
          </div>

          <span className={`order-status ${statusClass}`}>
            {status}
          </span>

        </div>

        {/* BODY */}
        <div className="order-body">

          {/* Product */}
          <div className="product-info">

            <div className="product-icon">
              🌾
            </div>

            <div>
              <h3>{product}</h3>
              <p>Fresh agricultural product</p>
            </div>

          </div>

          {/* Quantity */}
          <div className="order-detail">
            Quantity
            <strong>{quantity}</strong>
          </div>

          {/* Price */}
          <div className="order-detail">
            Price
            <strong>{price}</strong>
          </div>

          {/* Total */}
          <div className="order-total">
            <span>Total Amount</span>
            <h3>{total}</h3>
          </div>

        </div>

        {/* FOOTER */}
        <div className="order-footer">

          <div className="farmer-name">
            👨‍🌾 Farmer: <strong>{farmerName}</strong>
          </div>

          <div className="order-actions">

            <button
              className="details-btn"
              onClick={() => alert(`Order ${orderId} details`)}
            >
              View Details
            </button>

            {status !== "Cancelled" && (
              <button
                className="track-btn"
                onClick={() => alert(`Tracking ${orderId}`)}
              >
                🚚 Track Order
              </button>
            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default OrderCard;
