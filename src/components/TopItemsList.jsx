import { topSellers } from '../data/demoData';

export default function TopItemsList() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Top Sellers</div>
          <span className="page-subtitle">Best performing items</span>
        </div>
        <div className="metric-icon" style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 18v-3" />
            <path d="M10 18v-6" />
            <path d="M14 18v-9" />
            <path d="M18 18v-12" />
          </svg>
        </div>
      </div>
      <div className="list">
        {topSellers.map((item) => (
          <div key={item.name} className="list-item" style={{ background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  background: '#f3f4f8',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#64748b'
                }}
              >
                {item.rank}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</div>
                <span className="page-subtitle">{item.sold} sold</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 700 }}>{item.revenue}</div>
              <span style={{ fontSize: 11, color: '#16a34a' }}>↗ {item.delta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
