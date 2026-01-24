export default function ProfilePage() {
  return (
    <div className="page profile-page">
      <header className="page-header">
        <div>
          <h2 className="page-title">Profile</h2>
        </div>
        <button className="icon-circle" type="button" aria-label="Settings">
          ⚙️
        </button>
      </header>

      <section className="profile-card">
        <div className="avatar large">SJ</div>
        <div className="profile-info">
          <h3>Sarah Johnson</h3>
          <p>
            <span className="lock">🔒</span> Team Lead
          </p>
          <div className="profile-meta">
            <span>📧 sarah.johnson@company.com</span>
            <span>🧑‍💼 Customer Service · EMP-2847</span>
          </div>
        </div>
      </section>

      <section className="stat-grid">
        <div className="stat-card">
          <div className="stat-icon blue">⏱</div>
          <strong>1,847</strong>
          <span>Total Hours</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon green">📅</div>
          <strong>231</strong>
          <span>Shifts Completed</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon amber">⭐</div>
          <strong>4.9</strong>
          <span>Rating</span>
        </div>
      </section>

      <section className="balance-card">
        <div className="section-header">
          <h3>Time Off Balance</h3>
          <button className="link-btn" type="button">
            Request
          </button>
        </div>
        <div className="balance-grid">
          <div className="balance-pill green">
            <strong>12</strong>
            <span>Vacation</span>
          </div>
          <div className="balance-pill blue">
            <strong>5</strong>
            <span>Sick Days</span>
          </div>
          <div className="balance-pill purple">
            <strong>3</strong>
            <span>Personal</span>
          </div>
        </div>
      </section>

      <section className="list-section">
        <p className="section-label">Account</p>
        <div className="list-card">
          <button className="list-item" type="button">
            <span>👤 Edit Profile</span>
            <span>›</span>
          </button>
          <button className="list-item" type="button">
            <span>🔒 Privacy & Security</span>
            <span>›</span>
          </button>
          <button className="list-item" type="button">
            <span>📄 Documents</span>
            <span>›</span>
          </button>
        </div>
      </section>

      <section className="list-section">
        <p className="section-label">Preferences</p>
        <div className="list-card">
          <div className="list-item toggle">
            <span>🔔 Push Notifications</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider" />
            </label>
          </div>
          <div className="list-item toggle">
            <span>🌙 Dark Mode</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider" />
            </label>
          </div>
        </div>
      </section>

      <section className="list-section">
        <p className="section-label">Support</p>
        <div className="list-card">
          <button className="list-item" type="button">
            <span>❓ Help Center</span>
            <span>›</span>
          </button>
          <button className="list-item" type="button">
            <span>💬 Contact Support</span>
            <span>›</span>
          </button>
        </div>
      </section>

      <button className="signout-btn" type="button">
        ⟵ Sign Out
      </button>
      <p className="version">Version 1.0.0 · Made with ❤️</p>
    </div>
  );
}
