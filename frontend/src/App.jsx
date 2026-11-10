import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import FarmerDashboard from "./pages/FarmerDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/farmer-login"
          element={<FarmerLogin />}
        />

        <Route
          path="/farmer-signup"
          element={<FarmerSignup />}
        />

        <Route
          path="/farmer-dashboard"
          element={<FarmerDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;