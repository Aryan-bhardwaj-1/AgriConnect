import React from "react";

const FarmerEarnings = () => {
  const transactions = [
    {
      id: "#ORD1024",
      product: "Wheat",
      buyer: "Rahul Traders",
      date: "06 Sep 2026",
      amount: "₹18,500",
      status: "Paid",
    },
    {
      id: "#ORD1023",
      product: "Rice",
      buyer: "Fresh Mart",
      date: "05 Sep 2026",
      amount: "₹24,000",
      status: "Paid",
    },
    {
      id: "#ORD1022",
      product: "Tomato",
      buyer: "City Foods",
      date: "04 Sep 2026",
      amount: "₹8,750",
      status: "Pending",
    },
    {
      id: "#ORD1021",
      product: "Potato",
      buyer: "Green Basket",
      date: "03 Sep 2026",
      amount: "₹12,300",
      status: "Paid",
    },
  ];

  const products = [
    { name: "Wheat", sales: "185 kg", earning: "₹18,500", percent: 90 },
    { name: "Rice", sales: "240 kg", earning: "₹24,000", percent: 100 },
    { name: "Tomato", sales: "175 kg", earning: "₹8,750", percent: 55 },
    { name: "Potato", sales: "205 kg", earning: "₹12,300", percent: 70 },
    { name: "Onion", sales: "158 kg", earning: "₹15,800", percent: 78 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f8f4",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <p
            style={{
              color: "#16803a",
              fontSize: "12px",
              fontWeight: "800",
              letterSpacing: "1.5px",
              margin: "0 0 7px",
            }}
          >
            FARMER PANEL
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              color: "#17251b",
            }}
          >
            My Earnings
          </h1>

          <p
            style={{
              color: "#718071",
              fontSize: "14px",
            }}
          >
            Track your sales, income and payment history.
          </p>
        </div>

        <button
          style={{
            border: "none",
            background: "#16803a",
            color: "white",
            padding: "14px 22px",
            borderRadius: "10px",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          💰 Withdraw Money
        </button>
      </div>

      {/* EARNING CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginBottom: "22px",
        }}
      >

        {/* TOTAL */}
        <div
          style={{
            background: "white",
            padding: "22px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              background: "#dcfce7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#15803d",
            }}
          >
            ₹
          </div>

          <div>
            <p style={{ margin: 0, color: "#758175", fontSize: "13px" }}>
              Total Earnings
            </p>

            <h2 style={{ margin: "6px 0", fontSize: "24px" }}>
              ₹79,350
            </h2>

            <span style={{ color: "#15803d", fontSize: "12px" }}>
              ↑ 18.5% this month
            </span>
          </div>
        </div>

        {/* MONTH */}
        <div
          style={{
            background: "white",
            padding: "22px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              background: "#dbeafe",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            📅
          </div>

          <div>
            <p style={{ margin: 0, color: "#758175", fontSize: "13px" }}>
              This Month
            </p>

            <h2 style={{ margin: "6px 0", fontSize: "24px" }}>
              ₹42,850
            </h2>

            <span style={{ color: "#2563eb", fontSize: "12px" }}>
              ↑ 12.4% from last month
            </span>
          </div>
        </div>

        {/* PENDING */}
        <div
          style={{
            background: "white",
            padding: "22px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              background: "#ffedd5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            ⏳
          </div>

          <div>
            <p style={{ margin: 0, color: "#758175", fontSize: "13px" }}>
              Pending Payment
            </p>

            <h2 style={{ margin: "6px 0", fontSize: "24px" }}>
              ₹8,750
            </h2>

            <span style={{ color: "#ea580c", fontSize: "12px" }}>
              2 payments pending
            </span>
          </div>
        </div>

        {/* TODAY */}
        <div
          style={{
            background: "white",
            padding: "22px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              background: "#f3e8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            📈
          </div>

          <div>
            <p style={{ margin: 0, color: "#758175", fontSize: "13px" }}>
              Today's Sales
            </p>

            <h2 style={{ margin: "6px 0", fontSize: "24px" }}>
              ₹6,250
            </h2>

            <span style={{ color: "#9333ea", fontSize: "12px" }}>
              ↑ 8.2% today
            </span>
          </div>
        </div>

      </div>

      {/* BALANCE + CHART */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "22px",
          marginBottom: "22px",
        }}
      >

        {/* CHART */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: "18px" }}>
                Revenue Overview
              </h2>

              <p style={{ color: "#7a867a", fontSize: "13px" }}>
                Your earnings performance
              </p>
            </div>

            <select
              style={{
                padding: "9px",
                borderRadius: "8px",
                border: "1px solid #d9e2d9",
              }}
            >
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
            </select>
          </div>

          <div
            style={{
              height: "250px",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              gap: "15px",
              padding: "20px",
              borderLeft: "1px solid #ddd",
              borderBottom: "1px solid #ddd",
            }}
          >
            {[45, 65, 55, 80, 62, 90, 75].map((height, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  height: `${height}%`,
                  background: "#16803a",
                  borderRadius: "7px 7px 0 0",
                  minWidth: "20px",
                }}
              ></div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
              color: "#8b958b",
              fontSize: "11px",
            }}
          >
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* BALANCE */}
        <div
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "15px",
            border: "1px solid #e7eee7",
          }}
        >
          <p style={{ color: "#788278", fontSize: "13px" }}>
            Available Balance
          </p>

          <h2
            style={{
              fontSize: "31px",
              color: "#16803a",
              margin: "8px 0 20px",
            }}
          >
            ₹70,600
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div
              style={{
                padding: "15px",
                background: "#f6f8f6",
                borderRadius: "10px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#7a857b" }}>
                Pending
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: "5px",
                }}
              >
                ₹8,750
              </strong>
            </div>

            <div
              style={{
                padding: "15px",
                background: "#f6f8f6",
                borderRadius: "10px",
              }}
            >
              <span style={{ fontSize: "12px", color: "#7a857b" }}>
                Total Sales
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: "5px",
                }}
              >
                ₹91,400
              </strong>
            </div>
          </div>

          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "13px",
              border: "none",
              borderRadius: "9px",
              background: "#16803a",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Withdraw to Bank Account
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#899389",
              fontSize: "11px",
              marginTop: "15px",
            }}
          >
            🔒 Secure payment powered by AGRI-CONNECT
          </p>
        </div>

      </div>

      {/* PRODUCT EARNINGS */}
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "15px",
          border: "1px solid #e7eee7",
          marginBottom: "22px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "18px" }}>
          Product-wise Earnings
        </h2>

        <p style={{ color: "#7a867a", fontSize: "13px" }}>
          See which crops are generating the most revenue.
        </p>

        {products.map((product, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 2fr 120px",
              gap: "25px",
              alignItems: "center",
              padding: "15px 0",
              borderBottom: "1px solid #edf1ed",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "9px",
                  background: "#eef8ef",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                🌾
              </div>

              <div>
                <strong>{product.name}</strong>

                <span
                  style={{
                    display: "block",
                    color: "#7c877d",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  {product.sales} sold
                </span>
              </div>
            </div>

            <div
              style={{
                height: "8px",
                background: "#e9eee9",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${product.percent}%`,
                  height: "100%",
                  background: "#16803a",
                  borderRadius: "20px",
                }}
              ></div>
            </div>

            <strong
              style={{
                textAlign: "right",
                color: "#16803a",
              }}
            >
              {product.earning}
            </strong>
          </div>
        ))}
      </div>

      {/* TRANSACTIONS */}
      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "15px",
          border: "1px solid #e7eee7",
          overflowX: "auto",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "18px" }}>
          Recent Transactions
        </h2>

        <p style={{ color: "#7a867a", fontSize: "13px" }}>
          Latest payments from your buyers.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "750px",
          }}
        >
          <thead>
            <tr style={{ background: "#f7f9f7" }}>
              <th style={thStyle}>Order ID</th>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Buyer</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td style={tdStyle}>
                  <strong>{transaction.id}</strong>
                </td>

                <td style={tdStyle}>
                  🌱 {transaction.product}
                </td>

                <td style={tdStyle}>
                  {transaction.buyer}
                </td>

                <td style={tdStyle}>
                  {transaction.date}
                </td>

                <td style={tdStyle}>
                  <strong>{transaction.amount}</strong>
                </td>

                <td style={tdStyle}>
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "700",
                      background:
                        transaction.status === "Paid"
                          ? "#dcfce7"
                          : "#fff7ed",
                      color:
                        transaction.status === "Paid"
                          ? "#15803d"
                          : "#c2410c",
                    }}
                  >
                    {transaction.status === "Paid"
                      ? "✓ Paid"
                      : "⏳ Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

const thStyle = {
  textAlign: "left",
  padding: "13px",
  color: "#7b867c",
  fontSize: "12px",
};

const tdStyle = {
  padding: "16px 13px",
  borderBottom: "1px solid #edf1ed",
  fontSize: "13px",
  color: "#596459",
};

export default FarmerEarnings;