import React, { useState } from "react";

const FarmerProducts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showAddProduct, setShowAddProduct] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wheat",
      category: "Grains",
      quantity: "500 kg",
      price: "₹32/kg",
      status: "Active",
      sales: 185,
      image: "🌾",
    },
    {
      id: 2,
      name: "Rice",
      category: "Grains",
      quantity: "750 kg",
      price: "₹48/kg",
      status: "Active",
      sales: 240,
      image: "🌾",
    },
    {
      id: 3,
      name: "Tomato",
      category: "Vegetables",
      quantity: "300 kg",
      price: "₹50/kg",
      status: "Active",
      sales: 175,
      image: "🍅",
    },
    {
      id: 4,
      name: "Potato",
      category: "Vegetables",
      quantity: "450 kg",
      price: "₹30/kg",
      status: "Active",
      sales: 205,
      image: "🥔",
    },
    {
      id: 5,
      name: "Onion",
      category: "Vegetables",
      quantity: "350 kg",
      price: "₹42/kg",
      status: "Out of Stock",
      sales: 158,
      image: "🧅",
    },
    {
      id: 6,
      name: "Mustard",
      category: "Oil Seeds",
      quantity: "250 kg",
      price: "₹65/kg",
      status: "Active",
      sales: 92,
      image: "🌱",
    },
  ]);

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    return searchMatch && categoryMatch;
  });

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .products-page {
          min-height: 100vh;
          padding: 30px;
          background: #f5f8f4;
          font-family: Arial, Helvetica, sans-serif;
          color: #1f2937;
        }

        /* HEADER */

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          gap: 20px;
        }

        .small-title {
          margin: 0 0 7px;
          color: #16803a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .products-header h1 {
          margin: 0;
          font-size: 32px;
          color: #17251b;
        }

        .subtitle {
          color: #718071;
          font-size: 14px;
          margin-top: 8px;
        }

        .add-product-btn {
          border: none;
          background: #16803a;
          color: white;
          padding: 14px 22px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: 0.25s;
        }

        .add-product-btn:hover {
          background: #10652d;
          transform: translateY(-2px);
        }

        /* STATS */

        .product-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 22px;
        }

        .stat-card {
          background: white;
          padding: 20px;
          border-radius: 15px;
          border: 1px solid #e7eee7;
          display: flex;
          align-items: center;
          gap: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.035);
        }

        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 13px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 23px;
          flex-shrink: 0;
        }

        .stat-green {
          background: #dcfce7;
        }

        .stat-blue {
          background: #dbeafe;
        }

        .stat-orange {
          background: #ffedd5;
        }

        .stat-purple {
          background: #f3e8ff;
        }

        .stat-card p {
          margin: 0;
          font-size: 13px;
          color: #758175;
        }

        .stat-card h2 {
          margin: 6px 0 0;
          font-size: 24px;
          color: #18231a;
        }

        /* TOOLBAR */

        .products-box {
          background: white;
          border: 1px solid #e7eee7;
          border-radius: 15px;
          padding: 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.035);
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .toolbar-left h2 {
          margin: 0;
          font-size: 19px;
          color: #18231a;
        }

        .toolbar-left p {
          margin: 6px 0 0;
          color: #7a867a;
          font-size: 13px;
        }

        .toolbar-right {
          display: flex;
          gap: 10px;
        }

        .search-box {
          position: relative;
        }

        .search-box input {
          width: 230px;
          padding: 11px 14px 11px 38px;
          border: 1px solid #d9e2d9;
          border-radius: 9px;
          outline: none;
          font-size: 13px;
        }

        .search-box input:focus {
          border-color: #16803a;
        }

        .search-icon {
          position: absolute;
          left: 13px;
          top: 10px;
          color: #7a867a;
        }

        .category-select {
          padding: 10px 12px;
          border: 1px solid #d9e2d9;
          border-radius: 9px;
          background: white;
          color: #4b574b;
          outline: none;
        }

        /* PRODUCT TABLE */

        .table-container {
          width: 100%;
          overflow-x: auto;
        }

        table {
          width: 100%;
          min-width: 900px;
          border-collapse: collapse;
        }

        thead {
          background: #f7f9f7;
        }

        th {
          padding: 14px;
          text-align: left;
          color: #778277;
          font-size: 12px;
          font-weight: 700;
        }

        td {
          padding: 16px 14px;
          border-bottom: 1px solid #edf1ed;
          color: #596459;
          font-size: 13px;
        }

        .product-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .product-image {
          width: 48px;
          height: 48px;
          border-radius: 11px;
          background: #eef8ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        .product-name {
          font-weight: 700;
          color: #273127;
        }

        .product-category {
          display: block;
          margin-top: 4px;
          color: #899389;
          font-size: 11px;
        }

        .price {
          color: #16803a;
          font-weight: 700;
        }

        .quantity {
          font-weight: 600;
          color: #374137;
        }

        .status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .active {
          color: #15803d;
          background: #dcfce7;
        }

        .out {
          color: #c2410c;
          background: #fff7ed;
        }

        .actions {
          display: flex;
          gap: 7px;
        }

        .action-btn {
          width: 34px;
          height: 34px;
          border: 1px solid #e1e7e1;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          font-size: 14px;
        }

        .action-btn:hover {
          background: #f1f7f2;
        }

        .delete-btn:hover {
          background: #fff1f1;
        }

        /* EMPTY */

        .empty-products {
          text-align: center;
          padding: 50px 20px;
          color: #7a867a;
        }

        .empty-products div {
          font-size: 45px;
          margin-bottom: 10px;
        }

        /* ADD PRODUCT MODAL */

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }

        .modal {
          width: 100%;
          max-width: 520px;
          background: white;
          border-radius: 18px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .modal-header h2 {
          margin: 0;
          color: #18231a;
        }

        .close-btn {
          border: none;
          background: #f2f5f2;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 7px;
          color: #394439;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #d9e2d9;
          border-radius: 9px;
          outline: none;
          font-size: 14px;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #16803a;
        }

        .modal-buttons {
          display: flex;
          gap: 10px;
          margin-top: 22px;
        }

        .cancel-btn,
        .save-btn {
          flex: 1;
          padding: 12px;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
        }

        .cancel-btn {
          background: white;
          border: 1px solid #d9e2d9;
        }

        .save-btn {
          background: #16803a;
          color: white;
          border: none;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .product-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 750px) {
          .products-page {
            padding: 18px;
          }

          .products-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .products-header h1 {
            font-size: 27px;
          }

          .add-product-btn {
            width: 100%;
          }

          .product-stats {
            grid-template-columns: 1fr;
          }

          .toolbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .toolbar-right {
            width: 100%;
            flex-direction: column;
          }

          .search-box,
          .search-box input,
          .category-select {
            width: 100%;
          }
        }

      `}</style>

      <div className="products-page">

        {/* HEADER */}

        <div className="products-header">

          <div>
            <p className="small-title">
              FARMER PANEL
            </p>

            <h1>
              My Products
            </h1>

            <p className="subtitle">
              Manage your crops and products listed on AGRI-CONNECT.
            </p>
          </div>

          <button
            className="add-product-btn"
            onClick={() => setShowAddProduct(true)}
          >
            + Add New Product
          </button>

        </div>

        {/* STATS */}

        <div className="product-stats">

          <div className="stat-card">

            <div className="stat-icon stat-green">
              🌱
            </div>

            <div>
              <p>Total Products</p>
              <h2>{products.length}</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon stat-blue">
              ✅
            </div>

            <div>
              <p>Active Products</p>
              <h2>
                {products.filter(
                  (p) => p.status === "Active"
                ).length}
              </h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon stat-orange">
              📦
            </div>

            <div>
              <p>Total Stock</p>
              <h2>2.6K kg</h2>
            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon stat-purple">
              💰
            </div>

            <div>
              <p>Product Value</p>
              <h2>₹1.42L</h2>
            </div>

          </div>

        </div>

        {/* PRODUCTS */}

        <div className="products-box">

          <div className="toolbar">

            <div className="toolbar-left">
              <h2>
                All Products
              </h2>

              <p>
                Manage your listed crops and inventory.
              </p>
            </div>

            <div className="toolbar-right">

              <div className="search-box">

                <span className="search-icon">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search product..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />

              </div>

              <select
                className="category-select"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option value="All">
                  All Categories
                </option>

                <option value="Grains">
                  Grains
                </option>

                <option value="Vegetables">
                  Vegetables
                </option>

                <option value="Oil Seeds">
                  Oil Seeds
                </option>

              </select>

            </div>

          </div>

          {/* TABLE */}

          <div className="table-container">

            {filteredProducts.length > 0 ? (

              <table>

                <thead>

                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Sales</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {filteredProducts.map((product) => (

                    <tr key={product.id}>

                      <td>

                        <div className="product-info">

                          <div className="product-image">
                            {product.image}
                          </div>

                          <div>
                            <span className="product-name">
                              {product.name}
                            </span>

                            <span className="product-category">
                              {product.category}
                            </span>
                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="quantity">
                          {product.quantity}
                        </span>
                      </td>

                      <td>
                        <span className="price">
                          {product.price}
                        </span>
                      </td>

                      <td>
                        {product.sales} kg
                      </td>

                      <td>

                        <span
                          className={`status ${
                            product.status === "Active"
                              ? "active"
                              : "out"
                          }`}
                        >
                          {product.status === "Active"
                            ? "✓ Active"
                            : "⚠ Out of Stock"}
                        </span>

                      </td>

                      <td>

                        <div className="actions">

                          <button
                            className="action-btn"
                            title="View"
                          >
                            👁️
                          </button>

                          <button
                            className="action-btn"
                            title="Edit"
                          >
                            ✏️
                          </button>

                          <button
                            className="action-btn delete-btn"
                            title="Delete"
                            onClick={() =>
                              deleteProduct(product.id)
                            }
                          >
                            🗑️
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            ) : (

              <div className="empty-products">

                <div>🌱</div>

                <h3>
                  No Products Found
                </h3>

                <p>
                  Try changing your search or category.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* ADD PRODUCT MODAL */}

      {showAddProduct && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <h2>
                Add New Product
              </h2>

              <button
                className="close-btn"
                onClick={() =>
                  setShowAddProduct(false)
                }
              >
                ×
              </button>

            </div>

            <div className="form-group">

              <label>
                Product Name
              </label>

              <input
                type="text"
                placeholder="e.g. Wheat"
              />

            </div>

            <div className="form-group">

              <label>
                Category
              </label>

              <select>

                <option>
                  Select Category
                </option>

                <option>
                  Grains
                </option>

                <option>
                  Vegetables
                </option>

                <option>
                  Fruits
                </option>

                <option>
                  Oil Seeds
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Quantity
              </label>

              <input
                type="number"
                placeholder="Enter quantity in kg"
              />

            </div>

            <div className="form-group">

              <label>
                Price per kg
              </label>

              <input
                type="number"
                placeholder="Enter price"
              />

            </div>

            <div className="modal-buttons">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowAddProduct(false)
                }
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={() =>
                  setShowAddProduct(false)
                }
              >
                Add Product
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default FarmerProducts;