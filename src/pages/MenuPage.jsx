import { menuCategories, menuItems, menuSummary } from '../data/demoData';

const iconMap = {
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3v18" />
      <path d="M16 7H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H8" />
    </svg>
  ),
  margin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16" />
      <path d="M6 16l4-4 4 3 4-6" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M8 12l-2 9 6-3 6 3-2-9" />
    </svg>
  )
};

export default function MenuPage() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Menu Items</h1>
          <p className="page-subtitle">10 items</p>
        </div>
        <button className="icon-button" type="button" aria-label="Add">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </svg>
        </button>
      </header>

      <div className="search-input">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input type="text" placeholder="Search menu items..." />
      </div>

      <div className="pill-row">
        {menuCategories.map((category) => (
          <span key={category} className={`pill${category === 'All' ? ' active' : ''}`}>
            {category}
          </span>
        ))}
      </div>

      <div className="summary-grid">
        {menuSummary.map((summary) => (
          <div key={summary.label} className="card" style={{ display: 'grid', gap: 6 }}>
            <div className="metric-icon" style={{ width: 36, height: 36, background: '#f3f4f8', color: '#4f46e5' }}>
              {iconMap[summary.icon]}
            </div>
            <div style={{ fontWeight: 700 }}>{summary.value}</div>
            <span className="page-subtitle">{summary.label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  className="metric-icon"
                  style={{ width: 44, height: 44, background: '#ffe8d0', color: '#f97316' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 3v6" />
                    <path d="M10 3v6" />
                    <path d="M6 9h4" />
                    <path d="M14 5h6" />
                    <path d="M17 3v18" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{item.name}</div>
                  <div className="menu-item-meta">
                    <span className="menu-chip">{item.category}</span>
                    <span>{item.sold} sold</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700 }}>{item.price}</div>
                <span style={{ fontSize: 11, color: '#16a34a' }}>↗ {item.margin} margin</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, fontSize: 12 }}>
              <div>
                <span className="page-subtitle">Cost</span>
                <div style={{ fontWeight: 600 }}>{item.cost}</div>
              </div>
              <div>
                <span className="page-subtitle">Revenue</span>
                <div style={{ fontWeight: 600 }}>{item.revenue}</div>
              </div>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
