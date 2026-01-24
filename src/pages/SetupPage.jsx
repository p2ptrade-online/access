import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SetupPage() {
  const [tenantId, setTenantId] = useState('');
  const navigate = useNavigate();

  const fullUrl = useMemo(() => {
    if (!tenantId.trim()) {
      return 'https://{tenant}.zentrapos.com';
    }
    return `https://${tenantId.trim()}.zentrapos.com`;
  }, [tenantId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!tenantId.trim()) {
      return;
    }
    localStorage.setItem('tenantUrl', fullUrl);
    navigate('/login');
  };

  return (
    <div className="page auth-page">
      <div className="auth-header">
        <div className="logo-pill">Zentra</div>
        <h1>Connect your workspace</h1>
        <p>Enter your tenant domain to access schedules, shifts, and alerts.</p>
      </div>
      <form className="auth-card" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="tenant">
          Tenant domain
        </label>
        <div className="input-wrap">
          <input
            id="tenant"
            type="text"
            placeholder="client1.server1pos"
            value={tenantId}
            onChange={(event) => setTenantId(event.target.value)}
          />
        </div>
        <div className="tenant-preview">
          <span>Workspace URL</span>
          <strong>{fullUrl}</strong>
        </div>
        <button className="primary-btn" type="submit">
          Next
        </button>
        <p className="helper-text">You can change this later in Profile.</p>
      </form>
    </div>
  );
}
