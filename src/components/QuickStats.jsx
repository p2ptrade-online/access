import { quickStats } from '../data/demoData';

export default function QuickStats() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Quick Stats</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Live dining room snapshot</span>
        </div>
        <span className="badge">Live</span>
      </div>
      <div className="metric-grid">
        {quickStats.map((stat) => (
          <div key={stat.label} style={{ padding: 12, borderRadius: 16, background: 'rgba(15, 23, 42, 0.5)' }}>
            <div style={{ color: 'var(--color-muted)', fontSize: 12 }}>{stat.label}</div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
