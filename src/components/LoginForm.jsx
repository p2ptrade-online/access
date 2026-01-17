export default function LoginForm() {
  return (
    <div className="card login-card">
      <div className="card-header" style={{ marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 600 }}>Welcome back</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Sign in to manage your restaurant</span>
        </div>
        <span className="badge">POS</span>
      </div>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@restaurant.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button type="button">Sign In</button>
      </form>
    </div>
  );
}
