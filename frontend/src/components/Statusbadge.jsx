import React from "react";

const StatusBadge = ({ status }) => {
  const statusStyle = {
    Available: {
      backgroundColor: "#dcfce7",
      color: "#15803d",
    },
    Pending: {
      backgroundColor: "#fef3c7",
      color: "#b45309",
    },
    Sold: {
      backgroundColor: "#fee2e2",
      color: "#dc2626",
    },
    Delivered: {
      backgroundColor: "#dbeafe",
      color: "#2563eb",
    },
  };

  const style = statusStyle[status] || {
    backgroundColor: "#f3f4f6",
    color: "#374151",
  };

  return (
    <span
      style={{
        ...style,
        padding: "5px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "600",
        display: "inline-block",
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
