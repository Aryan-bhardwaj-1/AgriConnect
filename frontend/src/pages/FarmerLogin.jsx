import { useNavigate } from "react-router-dom";

function FarmerLogin() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Login successful
    navigate("/farmer-dashboard");
  };

  return (
    <div>

      <h1>AgriConnect</h1>

      <h2>Farmer Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default FarmerLogin;
