import React from "react";

function BulkOrder() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Bulk Order</h1>
      <p>Buy agricultural products in bulk directly from farmers.</p>

      <form>
        <label>Product Name:</label>
        <br />
        <input type="text" placeholder="Enter product name" />
        <br /><br />

        <label>Quantity (in kg):</label>
        <br />
        <input type="number" placeholder="Enter quantity" />
        <br /><br />

        <label>Delivery Location:</label>
        <br />
        <input type="text" placeholder="Enter delivery location" />
        <br /><br />

        <button type="button">Submit Bulk Order</button>
      </form>
    </div>
  );
}

export default BulkOrder;
