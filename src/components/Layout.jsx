import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Layout() {
  return (
    <div className="safe-area">
      <div className="app-shell">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
