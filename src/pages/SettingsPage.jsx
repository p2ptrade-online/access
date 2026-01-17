import { settingsAccount, settingsSections } from '../data/demoData';

export default function SettingsPage() {
  return (
    <div className="page">
      <header>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Customize your experience</p>
      </header>

      <div className="settings-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.2)',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 700
            }}
          >
            {settingsAccount.initials}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{settingsAccount.name}</div>
            <span style={{ fontSize: 12, opacity: 0.8 }}>{settingsAccount.email}</span>
            <div style={{ marginTop: 6 }}>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                {settingsAccount.plan}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="section-title">Account</div>
        <div className="settings-list">
          {settingsSections.account.map((item) => (
            <div key={item.title} className="settings-item">
              <div>
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
              <span style={{ color: '#c0c4d4' }}>›</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="section-title">Preferences</div>
        <div className="settings-list">
          {settingsSections.preferences.map((item) => (
            <div key={item.title} className="settings-item">
              <div>
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
              {item.type === 'toggle' ? (
                <div className={`toggle${item.active ? ' active' : ''}`} />
              ) : (
                <span style={{ color: '#c0c4d4' }}>›</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="section-title">Support</div>
        <div className="settings-list">
          {settingsSections.support.map((item) => (
            <div key={item.title} className="settings-item">
              <div>
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <div className="subtitle">{item.subtitle}</div>
              </div>
              <span style={{ color: '#c0c4d4' }}>›</span>
            </div>
          ))}
        </div>
      </div>

      <div className="signout">Sign Out</div>
      <p style={{ textAlign: 'center', fontSize: 12, color: '#c0c4d4' }}>POS Insights v1.0.0</p>
    </div>
  );
}
