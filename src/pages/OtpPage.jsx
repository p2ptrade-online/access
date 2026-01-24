import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="page auth-page">
      <div className="auth-header">
        <div className="logo-pill">Zentra</div>
        <h1>Verify OTP</h1>
        <p>Enter the 6-digit code sent to your device.</p>
      </div>
      <form className="auth-card" onSubmit={handleSubmit}>
        <label className="input-label" htmlFor="otp">
          One-time password
        </label>
        <div className="input-wrap">
          <input
            id="otp"
            type="text"
            inputMode="numeric"
            placeholder="000000"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
          />
        </div>
        <button className="primary-btn" type="submit">
          Verify & Continue
        </button>
        <button className="text-btn" type="button" onClick={() => navigate('/login')}>
          Back to login
        </button>
      </form>
    </div>
  );
}
