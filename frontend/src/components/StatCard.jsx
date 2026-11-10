// components/StatCard.jsx

function StatCard({ title, value, icon, color = "green" }) {
  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default StatCard;

