import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Sales', path: '/sales' },
  { label: 'Expenses', path: '/expenses' },
  { label: 'Menu', path: '/menu' },
  { label: 'Settings', path: '/settings' }
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <div className="nav-pill">●</div>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
