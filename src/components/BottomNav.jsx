import { NavLink } from 'react-router-dom';

const navItems = [
  {
    label: 'Home',
    path: '/home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11.5l9-7 9 7" />
        <path d="M5 10.5V20h5v-5h4v5h5v-9.5" />
      </svg>
    )
  },
  {
    label: 'Schedule',
    path: '/schedule',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 3v4" />
        <path d="M17 3v4" />
        <path d="M3 11h18" />
      </svg>
    )
  },
  {
    label: 'Swap',
    path: '/swap',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 7h11l-3-3" />
        <path d="M17 17H6l3 3" />
      </svg>
    )
  },
  {
    label: 'Alerts',
    path: '/alerts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
        <path d="M13.8 21a2 2 0 0 1-3.6 0" />
      </svg>
    )
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M4.5 19.2a7.5 7.5 0 0 1 15 0" />
      </svg>
    )
  }
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <div className="nav-pill">{item.icon}</div>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
