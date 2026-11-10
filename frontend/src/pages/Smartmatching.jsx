import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import MatchCard from "../components/MatchCard";

export default function SmartMatching() {
  const navigate = useNavigate();

  // Buyer requirements
  const [productName, setProductName] = useState("");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Matching products
  const [matches, setMatches] = useState([]);

  // Messages
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const findMatches = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    setMatches([]);

    try {
      // Get all products from backend
      const response = await fetch(
        "http://localhost:5000/api/products"
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to fetch products"
        );
        return;
      }

      // Filter products based on buyer requirements
      const filteredProducts = data.filter((product) => {
        const productMatches =
          !productName ||
          product.name
            .toLowerCase()
            .includes(productName.toLowerCase());

        const locationMatches =
          !location ||
          product.location
            .toLowerCase()
            .includes(location.toLowerCase());

        const priceMatches =
          !maxPrice ||
          product.price <= Number(maxPrice);

        const quantityMatches =
          !quantity ||
          product.quantity >= Number(quantity);

        return (
          productMatches &&
          locationMatches &&
          priceMatches &&
          quantityMatches
        );
      });

      // Calculate smart matching score
      const scoredMatches = filteredProducts.map((product) => {
        let score = 0;

        // Product name match
        if (
          productName &&
          product.name
            .toLowerCase()
            .includes(productName.toLowerCase())
        ) {
          score += 40;
        }

        // Location match
        if (
          location &&
          product.location
            .toLowerCase()
            .includes(location.toLowerCase())
        ) {
          score += 25;
        }

        // Price is inside buyer budget
        if (
          maxPrice &&
          product.price <= Number(maxPrice)
        ) {
          score += 20;
        }

        // Quantity available
        if (
          quantity &&
          product.quantity >= Number(quantity)
        ) {
          score += 15;
        }

        // Default score if fields are empty
        if (score === 0) {
          score = 50;
        }

        return {
          ...product,
          matchScore: score
        };
      });

      // Sort best matches first
      scoredMatches.sort(
        (a, b) =>
          b.matchScore - a.matchScore
      );

      setMatches(scoredMatches);

    } catch (error) {
      console.error(
        "Smart matching error:",
        error
      );

      setError(
        "Unable to connect to server. Make sure backend is running."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="matching-page">

      {/* Header */}

      <div className="matching-header">

        <div>
          <h1>Smart Matching 🤖</h1>

          <p>
            Find the best farmers and products
            according to your requirements.
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


      {/* Matching Form */}

      <form
        className="matching-form"
        onSubmit={findMatches}
      >

        <Input
          label="Product Name"
          type="text"
          placeholder="Example: Tomato"
          value={productName}
          onChange={(e) =>
            setProductName(e.target.value)
          }
        />

        <Input
          label="Preferred Location"
          type="text"
          placeholder="Example: Basti"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
        />

        <Input
          label="Maximum Price per kg (₹)"
          type="number"
          placeholder="Example: 40"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
        />

        <Input
          label="Required Quantity (kg)"
          type="number"
          placeholder="Example: 100"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Finding Matches..."
            : "Find Best Matches"
          }
        </Button>

      </form>


      {/* Error Message */}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}


      {/* No Matches */}

      {!loading &&
        !error &&
        matches.length === 0 && (

          <div className="matching-empty">

            <h2>Find Your Best Match 🌾</h2>

            <p>
              Enter your requirements above and
              FarmDirect will find suitable
              products and farmers.
            </p>

          </div>

        )}


      {/* Matching Results */}

      {matches.length > 0 && (

        <div className="matching-results">

          <h2>
            Best Matches Found ({matches.length})
          </h2>

          <div className="matches-grid">

            {matches.map((product) => (

              <MatchCard
                key={product._id}
                product={product}
                matchScore={product.matchScore}
              />

            ))}

          </div>

        </div>

      )}

    </div>
  );
}


