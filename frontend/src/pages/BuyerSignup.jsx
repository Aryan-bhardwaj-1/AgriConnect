import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function BuyerSignup() {
  // Store form input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Store error and success messages
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Used to redirect user
  const navigate = useNavigate();


  // Runs when the form is submitted
  const handleSubmit = async (e) => {
    // Prevent page refresh
    e.preventDefault();

    // Clear previous error
    setError("");

    // Start loading
    setLoading(true);

    try {
      // Send buyer data to backend
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            password: password,

            // This identifies the user as a buyer
            role: "buyer",

            location: location
          })
        }
      );


      // Convert response into JavaScript object
      const data = await response.json();


      // If registration failed
      if (!response.ok) {
        setError(
          data.message || "Registration failed"
        );

        return;
      }


      // Save JWT token
      localStorage.setItem(
        "token",
        data.token
      );


      // Save buyer information
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      // Redirect to buyer dashboard
      navigate("/buyer/dashboard");

    } catch (error) {

      console.error(
        "Signup error:",
        error
      );

      setError(
        "Unable to connect to server. Make sure backend is running."
      );

    } finally {

      // Stop loading
      setLoading(false);

    }
  };


  return (
    <div className="auth-page">

      <form
        className="form-card"
        onSubmit={handleSubmit}
      >

        <h2>Buyer Registration 🛒</h2>

        <p>
          Create your account and buy fresh products directly from farmers.
        </p>


        {/* Show error message */}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}


        {/* Name */}

        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />


        {/* Phone */}

        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />


        {/* Location */}

        <Input
          label="Delivery Location"
          type="text"
          placeholder="City / District"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />


        {/* Email */}

        <Input
          label="Email"
          type="email"
          placeholder="buyer@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        {/* Password */}

        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />


        {/* Submit Button */}

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Create Buyer Account"
          }
        </Button>


        {/* Login Link */}

        <p className="signup-link">

          Already have an account?{" "}

          <Link to="/buyer/login">
            Login here
          </Link>

        </p>

      </form>

    </div>
  );
}