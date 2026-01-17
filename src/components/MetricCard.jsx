const iconMap = {
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M17 7H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7" />
    </svg>
  ),
  expenses: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16" />
      <path d="M6 20V10l6-4 6 4v10" />
    </svg>
  ),
  orders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16" />
      <path d="M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  customers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M4 20a8 8 0 0 1 16 0" />
      <circle cx="12" cy="7" r="3" />
    </svg>
  ),
  tips: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M16 7H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H8" />
    </svg>
  )
};

const toneStyles = {
  primary: { background: 'rgba(79,70,229,0.12)', color: '#4f46e5' },
  success: { background: 'rgba(34,197,94,0.12)', color: '#22c55e' },
  purple: { background: 'rgba(139,92,246,0.12)', color: '#8b5cf6' },
  orange: { background: 'rgba(249,115,22,0.12)', color: '#f97316' }
};

export default function MetricCard({ label, value, delta, trend, tone, icon }) {
  const deltaClass = trend === 'down' ? 'delta-down' : 'delta-up';
  const iconStyle = toneStyles[tone] ?? toneStyles.primary;

  return (
    <div className="metric-card">
      <div className="metric-top">
        <span>{label}</span>
        <span className={`metric-delta ${deltaClass}`}>{delta}</span>
      </div>
      <div className="metric-value">{value}</div>
      <div className="metric-icon" style={iconStyle}>
        {iconMap[icon]}
      </div>
    </div>
  );
}
