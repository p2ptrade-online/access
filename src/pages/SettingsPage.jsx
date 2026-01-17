export default function SettingsPage() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <header>
        <h1 style={{ marginBottom: 6 }}>Settings</h1>
        <p style={{ color: 'var(--color-muted)', margin: 0 }}>Manage account and integrations.</p>
      </header>

      <div className="card" style={{ display: 'grid', gap: 16 }}>
        <div>
          <div style={{ fontWeight: 600 }}>Account</div>
          <p style={{ color: 'var(--color-muted)', marginTop: 6 }}>Owner: Jamie Rivera</p>
        </div>
        <div className="list-item">
          <div>
            <div style={{ fontWeight: 600 }}>Notifications</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>Push, email, SMS</span>
          </div>
          <span className="badge">Enabled</span>
        </div>
        <div className="list-item">
          <div>
            <div style={{ fontWeight: 600 }}>POS Integrations</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>Stripe, Square</span>
          </div>
          <span className="badge">Connected</span>
        </div>
        <div className="list-item">
          <div>
            <div style={{ fontWeight: 600 }}>Dark Mode</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>Always on</span>
          </div>
          <span className="badge">On</span>
        </div>
      </div>
    </div>
  );
}
