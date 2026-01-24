import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const openShifts = [
  {
    title: 'Night Audit',
    date: 'Monday, Jan 26',
    time: '11:00 PM - 07:00 AM',
    location: 'Central Station'
  },
  {
    title: 'Early Shift',
    date: 'Wednesday, Jan 28',
    time: '05:00 AM - 01:00 PM',
    location: 'Airport Office'
  }
];

const upcomingShifts = [
  {
    status: 'Pending',
    title: 'Evening Support',
    date: 'Tomorrow',
    month: 'January 2026',
    time: '02:00 PM - 10:00 PM',
    duration: '8h',
    location: 'Tech Center',
    role: 'IT Support',
    tone: 'warning'
  },
  {
    status: 'Canceled',
    title: 'Weekend Coverage',
    date: 'Tue, Jan 27',
    month: 'January 2026',
    time: '10:00 AM - 06:00 PM',
    duration: '8h',
    location: 'Main Branch',
    role: 'Operations',
    tone: 'danger'
  }
];

export default function HomePage() {
  const greetingDate = useMemo(() => 'Saturday, January 24', []);
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleAction = (message) => {
    setStatusMessage(message);
  };

  return (
    <div className="page home-page">
      <header className="home-header">
        <div>
          <p className="eyebrow">Hi, Sarah 👋</p>
          <h2>{greetingDate}</h2>
        </div>
        <button className="icon-circle" type="button" aria-label="Notifications" onClick={() => navigate('/alerts')}>
          <span className="badge-dot">3</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
            <path d="M13.8 21a2 2 0 0 1-3.6 0" />
          </svg>
        </button>
      </header>

      {statusMessage && <div className="inline-banner">{statusMessage}</div>}

      <section className="metric-row">
        <div className="metric-card primary">
          <div className="metric-icon">$</div>
          <div>
            <p>Est. Earnings</p>
            <strong>$1,280</strong>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon amber">↗</div>
          <div>
            <p>Overtime</p>
            <strong>4h</strong>
          </div>
        </div>
      </section>

      <section className="shift-card confirmed">
        <div className="shift-pill">Confirmed</div>
        <div className="shift-main">
          <div>
            <h3>Morning Shift</h3>
            <p>09:00 AM - 05:00 PM</p>
          </div>
          <div className="shift-date">
            <span>Today</span>
            <strong>January 2026</strong>
            <span>8h</span>
          </div>
        </div>
        <div className="shift-details">
          <div>
            <span className="dot blue" />
            Downtown Office
          </div>
          <div>
            <span className="dot violet" />
            Customer Service
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Open Shifts</h3>
          <span className="small-muted">2 available</span>
        </div>
        <div className="open-shifts">
          {openShifts.map((shift) => (
            <article key={shift.title} className="open-shift-card">
              <p className="open-date">{shift.date}</p>
              <h4>{shift.title}</h4>
              <p>{shift.time}</p>
              <p className="small-muted">{shift.location}</p>
              <button
                className="pill-btn"
                type="button"
                onClick={() => handleAction(`Shift pickup requested for ${shift.title}.`)}
              >
                Pick Up Shift
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Upcoming Shifts</h3>
          <button className="link-btn" type="button">
            View All
          </button>
        </div>
        <div className="upcoming-list">
          {upcomingShifts.map((shift) => (
            <article key={shift.title} className={`upcoming-card ${shift.tone}`}>
              <div className="upcoming-top">
                <span className="status-pill">{shift.status}</span>
                <div className="upcoming-date">
                  <strong>{shift.date}</strong>
                  <span>{shift.month}</span>
                </div>
              </div>
              <h4>{shift.title}</h4>
              <div className="upcoming-meta">
                <div>
                  <span className="dot blue" />
                  {shift.time}
                </div>
                <div>
                  <span className="dot teal" />
                  {shift.location}
                </div>
                <div>
                  <span className="dot violet" />
                  {shift.role}
                </div>
              </div>
              {shift.tone === 'warning' && (
                <div className="action-buttons">
                  <button
                    className="primary-btn"
                    type="button"
                    onClick={() => handleAction(`${shift.title} confirmed.`)}
                  >
                    Confirm
                  </button>
                  <button
                    className="ghost-btn"
                    type="button"
                    onClick={() => handleAction(`${shift.title} declined.`)}
                  >
                    Decline
                  </button>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
