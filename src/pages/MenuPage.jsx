import { menuItems } from '../data/demoData';

export default function MenuPage() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <header>
        <h1 style={{ marginBottom: 6 }}>Menu Performance</h1>
        <p style={{ color: 'var(--color-muted)', margin: 0 }}>Track top items and margins.</p>
      </header>

      <div className="card">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 600 }}>Top Items</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Weekly performance</span>
          </div>
          <span className="badge">4 items</span>
        </div>
        <div className="list">
          {menuItems.map((item) => (
            <div key={item.name} className="list-item">
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>Margin {item.margin}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600 }}>{item.price}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{item.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ display: 'grid', gap: 12 }}>
        <div style={{ fontWeight: 600 }}>Filters</div>
        <input type="text" placeholder="Search menu items" />
        <select>
          <option>All Categories</option>
          <option>Mains</option>
          <option>Drinks</option>
          <option>Desserts</option>
        </select>
      </div>
    </div>
  );
}
