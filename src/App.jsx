import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SetupPage from './pages/SetupPage';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import SwapPage from './pages/SwapPage';
import AlertsPage from './pages/AlertsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/setup" replace />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
