import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const tenantUrl = useMemo(() => localStorage.getItem('tenantUrl') || 'https://client1.server1pos.zentrapos.com', []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="page auth-page">
      <div className="auth-header">
        <div className="logo-pill">Zentra</div>
        <h1>Welcome back</h1>
        <p>Sign in to {tenantUrl.replace('https://', '')}</p>
      </div>
      <form className="auth-card" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="username">
          Username or email
        </label>
        <div className="input-wrap">
          <input
            id="username"
            type="text"
            placeholder="sarah.johnson"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <div className="input-wrap">
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="primary-btn" type="submit">
          Send OTP
        </button>
        <button className="text-btn" type="button" onClick={() => navigate('/setup')}>
          Use a different tenant
        </button>
      </form>
    </div>
  );
}
