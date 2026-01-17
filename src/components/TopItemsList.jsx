import { topItems } from '../data/demoData';

export default function TopItemsList() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Top Selling Items</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Last 7 days</span>
        </div>
        <span className="badge">Top 4</span>
      </div>
      <div className="list">
        {topItems.map((item) => (
          <div key={item.name} className="list-item">
            <div>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{item.sales} orders</span>
            </div>
            <div style={{ fontWeight: 600 }}>{item.revenue}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
