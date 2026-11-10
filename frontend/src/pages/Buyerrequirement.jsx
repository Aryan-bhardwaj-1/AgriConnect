import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function BuyerRequirement() {
  // Store form data
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [requiredDate, setRequiredDate] = useState("");
  const [description, setDescription] = useState("");

  // Messages
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Runs when buyer submits the requirement
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Create requirement object
    const requirement = {
      id: Date.now(),
      product,
      quantity,
      maxPrice,
      location,
      requiredDate,
      description,
      status: "Open"
    };

    // Get old requirements from localStorage
    const oldRequirements = JSON.parse(
      localStorage.getItem("requirements")
    ) || [];

    // Add new requirement
    const updatedRequirements = [
      ...oldRequirements,
      requirement
    ];

    // Save requirement in browser
    localStorage.setItem(
      "requirements",
      JSON.stringify(updatedRequirements)
    );

    setLoading(false);

    setMessage(
      "Your requirement has been posted successfully!"
    );

    // Clear form
    setProduct("");
    setQuantity("");
    setMaxPrice("");
    setLocation("");
    setRequiredDate("");
    setDescription("");
  };

  return (
    <div className="requirement-page">

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <h2>Post Your Requirement 📋</h2>

        <p>
          Tell farmers what product you need.
        </p>


        {/* Success Message */}

        {message && (
          <div className="success-message">
            {message}
          </div>
        )}


        {/* Product Name */}

        <Input
          label="Product Name"
          type="text"
          placeholder="Example: Tomato"
          value={product}
          onChange={(e) =>
            setProduct(e.target.value)
          }
          required
        />


        {/* Quantity */}

        <Input
          label="Required Quantity (kg)"
          type="number"
          placeholder="Example: 100"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
          required
        />


        {/* Maximum Price */}

        <Input
          label="Maximum Price per kg (₹)"
          type="number"
          placeholder="Example: 40"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
          required
        />


        {/* Location */}

        <Input
          label="Delivery Location"
          type="text"
          placeholder="Example: Basti, Uttar Pradesh"
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          required
        />


        {/* Required Date */}

        <Input
          label="Required Before"
          type="date"
          value={requiredDate}
          onChange={(e) =>
            setRequiredDate(e.target.value)
          }
          required
        />


        {/* Description */}

        <div className="input-group">

          <label>
            Additional Requirements
          </label>

          <textarea
            placeholder="Write any additional details..."
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            rows="4"
          />

        </div>


        {/* Submit Button */}

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Posting..."
            : "Post Requirement"
          }
        </Button>


        {/* Back Button */}

        <button
          type="button"
          className="secondary-btn"
          onClick={() =>
            navigate("/buyer/dashboard")
          }
        >
          Back to Dashboard
        </button>

      </form>

    </div>
  );
}
