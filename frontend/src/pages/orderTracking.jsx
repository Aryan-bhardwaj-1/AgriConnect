    import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderTracking() {
  const navigate = useNavigate();

  // Store orders from backend
  const [orders, setOrders] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error message
  const [error, setError] = useState("");

  // Get buyer orders when page loads
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      // If buyer is not logged in
      if (!token) {
        navigate("/buyer/login");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/orders/mine",
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",

            // Send JWT token to backend
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      // If API request failed
      if (!response.ok) {
        setError(
          data.message || "Unable to fetch orders"
        );

        return;
      }

      // Save orders in state
      setOrders(data);

    } catch (error) {

      console.error("Error fetching orders:", error);

      setError(
        "Unable to connect to server. Make sure backend is running."
      );

    } finally {

      setLoading(false);

    }
  };


  // Convert backend status into readable text
  const formatStatus = (status) => {
    if (!status) return "Pending";

    return status
      .replace("_", " ")
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase()
      );
  };


  // Return CSS class based on order status
  const getStatusClass = (status) => {
    if (status === "delivered") {
      return "status-delivered";
    }

    if (status === "cancelled") {
      return "status-cancelled";
    }

    if (status === "in_transit") {
      return "status-transit";
    }

    return "status-pending";
  };


  // Show loading
  if (loading) {
    return (
      <div className="tracking-page">
        <h2>Loading your orders...</h2>
      </div>
    );
  }


  return (
    <div className="tracking-page">

      {/* Page Header */}

      <div className="tracking-header">

        <div>

          <h1>Order Tracking 📦</h1>

          <p>
            Track your orders from farmers.
          </p>

        </div>


        <button
          className="secondary-btn"
          onClick={() =>
            navigate("/buyer/dashboard")
          }
        >
          Back to Dashboard
        </button>

      </div>


      {/* Error Message */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}


      {/* No Orders */}

      {!error && orders.length === 0 && (

        <div className="empty-orders">

          <h2>No Orders Yet 📭</h2>

          <p>
            You have not placed any orders yet.
          </p>

          <button
            className="primary-btn"
            onClick={() =>
              navigate("/buyer/search")
            }
          >
            Search Products
          </button>

        </div>

      )}


      {/* Orders List */}

      {orders.length > 0 && (

        <div className="orders-container">

          {orders.map((order) => (

            <div
              className="order-card"
              key={order._id}
            >

              {/* Product Information */}

              <div className="order-info">

                <h2>
                  {order.product?.name ||
                    "Product"}
                </h2>

                <p>
                  <strong>Quantity:</strong>{" "}
                  {order.quantity} kg
                </p>

                <p>
                  <strong>Total Price:</strong>{" "}
                  ₹{order.totalPrice}
                </p>

              </div>


              {/* Farmer Information */}

              <div className="order-info">

                <h3>Farmer Details 🌾</h3>

                <p>
                  <strong>Name:</strong>{" "}

                  {order.farmer?.name ||
                    "Not available"}
                </p>

                <p>
                  <strong>Location:</strong>{" "}

                  {order.farmer?.location ||
                    "Not available"}
                </p>

              </div>


              {/* Order Status */}

              <div className="order-status">

                <p>
                  <strong>Order Status</strong>
                </p>

                <span
                  className={`status ${getStatusClass(
                    order.status
                  )}`}
                >
                  {formatStatus(order.status)}
                </span>

              </div>


              {/* Order Date */}

              <div className="order-date">

                <p>
                  Ordered on:
                </p>

                <strong>
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </strong>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

