import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="card login-card">
      <div>
        <span className="badge" style={{ background: 'rgba(79, 70, 229, 0.12)', color: '#4f46e5' }}>
          POS Insights
        </span>
        <h1>Welcome back</h1>
        <p className="page-subtitle">Sign in to manage your restaurant operations.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" placeholder="you@restaurant.com" value={formState.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" placeholder="••••••••" value={formState.password} onChange={handleChange} />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p className="page-subtitle" style={{ textAlign: 'center' }}>
        Forgot your password? Contact support.
      </p>
    </div>
  );
}
