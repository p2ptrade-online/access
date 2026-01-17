import { quickStats } from '../data/demoData';

const iconMap = {
  orders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 4h12v6H6z" />
      <path d="M9 14h6" />
      <path d="M9 18h6" />
    </svg>
  ),
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M16 7H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H8" />
    </svg>
  ),
  customers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  ),
  peak: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
};

export default function QuickStats() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Quick Stats</div>
        </div>
      </div>
      <div className="metric-grid">
        {quickStats.map((stat) => (
          <div key={stat.label} className="list-item" style={{ background: '#f8f9ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                className="metric-icon"
                style={{ width: 32, height: 32, background: 'rgba(79,70,229,0.12)', color: '#4f46e5' }}
              >
                {iconMap[stat.icon]}
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#94a3b8' }}>{stat.label}</div>
                <div style={{ fontWeight: 700 }}>{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
