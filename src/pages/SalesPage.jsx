import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import HourlySalesChart from '../components/HourlySalesChart';
import { salesMetrics, salesRevenueTrend, salesTransactions, weeklyComparison } from '../data/demoData';

export default function SalesPage() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Sales</h1>
          <p className="page-subtitle">Performance overview</p>
        </div>
        <div className="action-row">
          <div className="chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <path d="M8 2v4M16 2v4M3 10h18" />
            </svg>
            7 Days
          </div>
        </div>
      </header>

      <div className="metric-grid">
        {salesMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} tone="primary" trend={metric.delta.includes('-') ? 'down' : 'up'} />
        ))}
      </div>

      <RevenueChart title="Revenue Trend" subtitle="Last 30 days performance" data={salesRevenueTrend} />

      <HourlySalesChart title="Weekly Comparison" subtitle="Revenue by day of week" data={weeklyComparison} xKey="day" barColor="#4f46e5" />

      <div className="card">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 600 }}>Recent Transactions</div>
            <span className="page-subtitle">Latest orders</span>
          </div>
        </div>
        <div className="list">
          {salesTransactions.map((transaction) => (
            <div key={transaction.id} className="list-item" style={{ background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="metric-icon" style={{ width: 34, height: 34, background: 'rgba(79,70,229,0.12)', color: '#4f46e5' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M6 7h12l-1 12H7L6 7z" />
                    <path d="M9 7V5a3 3 0 0 1 6 0v2" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{transaction.id}</div>
                  <span className="page-subtitle">{transaction.items}</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700 }}>{transaction.amount}</div>
                <span className="page-subtitle">{transaction.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
