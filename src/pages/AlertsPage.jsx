import { useState } from 'react';

const notifications = [
  {
    title: 'New Shift Assigned',
    message: 'You have been assigned to Morning Shift on Friday, Jan 10.',
    time: '32 minutes ago',
    tone: 'primary',
    icon: '📅'
  },
  {
    title: 'Shift Swap Request',
    message: 'Emily Rodriguez wants to swap shifts with you.',
    time: 'about 2 hours ago',
    tone: 'purple',
    icon: '🔁'
  },
  {
    title: 'Shift Reminder',
    message: 'Your shift starts in 1 hour at Downtown Office.',
    time: 'about 5 hours ago',
    tone: 'amber',
    icon: '⏰'
  },
  {
    title: 'Time Off Approved',
    message: 'Your time off request has been approved.',
    time: 'yesterday',
    tone: 'green',
    icon: '✅'
  }
];

export default function AlertsPage() {
  const [items, setItems] = useState(
    notifications.map((item, index) => ({
      ...item,
      unread: index === 1
    }))
  );

  const handleDelete = (title) => {
    setItems((current) => current.filter((item) => item.title !== title));
  };

  const handleMarkAll = () => {
    setItems((current) => current.map((item) => ({ ...item, unread: false })));
  };

  return (
    <div className="page alerts-page">
      <header className="page-header">
        <div>
          <h2 className="page-title">Notifications</h2>
          <p className="page-subtitle">{items.filter((item) => item.unread).length} unread</p>
        </div>
        <button className="text-btn" type="button" onClick={handleMarkAll}>
          Mark all read
        </button>
      </header>

      <div className="notification-list">
        {items.map((item) => (
          <article key={item.title} className={`notification-card ${item.tone}`}>
            <div className="notification-icon">{item.icon}</div>
            <div className="notification-body">
              <div className="notification-header">
                <h4>{item.title}</h4>
                <button
                  className="icon-circle small"
                  type="button"
                  aria-label="Delete notification"
                  onClick={() => handleDelete(item.title)}
                >
                  🗑️
                </button>
              </div>
              <p>{item.message}</p>
              <span className="small-muted">{item.time}</span>
            </div>
            {item.unread && <span className="unread-dot" />}
          </article>
        ))}
      </div>
    </div>
  );
}
