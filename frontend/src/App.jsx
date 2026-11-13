
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Pages
import Home from "./pages/Home";

// Farmer Pages
import FarmerLogin from "./pages/FarmerLogin";
import FarmerSignup from "./pages/FarmerSignup";
import FarmerDashboard from "./pages/FarmerDashboard";
import AddProduce from "./pages/Addproduce.jsx";
import FarmerEarnings from "./pages/FarmerEarnings";
import FarmerOrders from "./pages/FarmerOrders";
import MyProducts from "./pages/MyProducts";

// Buyer Pages
import BuyerLogin from "./pages/BuyerLogin";
import BuyerSignup from "./pages/BuyerSignup";
import BuyerDashboard from "./pages/BuyerDashboard";
import BulkOrder from "./pages/BulkOrder";
import Buyerrequirement from "./pages/Buyerrequirement";
import OrderTracking from "./pages/orderTracking";
import Searchproducts from "./pages/Searchproducts";
import Smartmatching from "./pages/Smartmatching";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Farmer Authentication */}
        <Route path="/farmer-login" element={<FarmerLogin />} />
        <Route path="/farmer-signup" element={<FarmerSignup />} />

        {/* Farmer Dashboard */}
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/add-produce" element={<AddProduce />} />
        <Route path="/farmer-earnings" element={<FarmerEarnings />} />
        <Route path="/farmer-orders" element={<FarmerOrders />} />
        <Route path="/my-products" element={<MyProducts />} />

        {/* Buyer Authentication */}
        <Route path="/buyer-login" element={<BuyerLogin />} />
        <Route path="/buyer-signup" element={<BuyerSignup />} />

        {/* Buyer Dashboard */}
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/bulk-order" element={<BulkOrder />} />
        <Route path="/buyer-requirements" element={<Buyerrequirement />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/search-products" element={<Searchproducts />} />
        <Route path="/smart-matching" element={<Smartmatching />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
