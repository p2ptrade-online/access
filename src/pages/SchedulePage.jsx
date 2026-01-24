import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(24);
  const navigate = useNavigate();

  return (
    <div className="page schedule-page">
      <header className="page-header">
        <div>
          <h2 className="page-title">My Schedule</h2>
          <p className="page-subtitle">January 2026</p>
        </div>
        <button className="icon-circle" type="button" aria-label="Notifications" onClick={() => navigate('/alerts')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
            <path d="M13.8 21a2 2 0 0 1-3.6 0" />
          </svg>
        </button>
      </header>

      <div className="segmented">
        <button className="segment active" type="button">
          Calendar
        </button>
        <button className="segment" type="button">
          List View
        </button>
      </div>

      <section className="calendar-card">
        <div className="calendar-header">
          <button
            className="icon-circle small"
            type="button"
            aria-label="Previous month"
            onClick={() => setSelectedDay((day) => Math.max(1, day - 1))}
          >
            ‹
          </button>
          <strong>January 2026</strong>
          <button
            className="icon-circle small"
            type="button"
            aria-label="Next month"
            onClick={() => setSelectedDay((day) => Math.min(31, day + 1))}
          >
            ›
          </button>
        </div>
        <div className="calendar-grid">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <span key={day} className="calendar-day">
              {day}
            </span>
          ))}
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <button
              key={day}
              className={`calendar-date${day === selectedDay ? ' active' : ''}`}
              type="button"
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </section>

      <section className="shift-card confirmed">
        <div className="shift-pill">Confirmed</div>
        <div className="shift-main">
          <div>
            <h3>Night Shift</h3>
            <p>02:00 PM - 10:00 PM</p>
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
            Airport Terminal
          </div>
          <div>
            <span className="dot violet" />
            Sales
          </div>
        </div>
      </section>
    </div>
  );
}
