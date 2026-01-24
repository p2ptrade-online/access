const swapOptions = [
  {
    title: 'Morning Shift',
    date: 'Sun, Jan 25 · 09:00 AM - 05:00 PM'
  },
  {
    title: 'Evening Support',
    date: 'Tue, Jan 27 · 02:00 PM - 10:00 PM'
  },
  {
    title: 'Weekend Coverage',
    date: 'Thu, Jan 29 · 10:00 AM - 06:00 PM'
  }
];

const teammates = [
  {
    name: 'Michael Chen',
    role: 'Operations'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Customer Service'
  },
  {
    name: 'Jason Lee',
    role: 'Sales'
  }
];

export default function SwapPage() {
  return (
    <div className="page swap-page">
      <header className="page-header">
        <div>
          <h2 className="page-title">Shift Swap</h2>
          <p className="page-subtitle">Trade shifts with teammates</p>
        </div>
        <button className="icon-circle" type="button" aria-label="Notifications">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
            <path d="M13.8 21a2 2 0 0 1-3.6 0" />
          </svg>
        </button>
      </header>

      <div className="segmented">
        <button className="segment active" type="button">
          Request Swap
        </button>
        <button className="segment" type="button">
          Requests
        </button>
      </div>

      <section className="swap-section">
        <div className="step-title">
          <span className="step">1</span>
          <h3>Select your shift to swap</h3>
        </div>
        <div className="swap-list">
          {swapOptions.map((shift, index) => (
            <button
              key={shift.title}
              className={`swap-card${index === 0 ? ' active' : ''}`}
              type="button"
            >
              <div>
                <strong>{shift.title}</strong>
                <p>{shift.date}</p>
              </div>
              <span className="check">✓</span>
            </button>
          ))}
        </div>
      </section>

      <section className="swap-section">
        <div className="step-title">
          <span className="step">2</span>
          <h3>Choose a teammate</h3>
        </div>
        <div className="swap-list">
          {teammates.map((mate) => (
            <div key={mate.name} className="teammate-card">
              <div className="avatar">{mate.name[0]}</div>
              <div>
                <strong>{mate.name}</strong>
                <p>{mate.role}</p>
              </div>
              <button className="ghost-btn" type="button">
                Request
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
