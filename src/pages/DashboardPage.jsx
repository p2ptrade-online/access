import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import ExpenseBreakdown from '../components/ExpenseBreakdown';
import HourlySalesChart from '../components/HourlySalesChart';
import TopItemsList from '../components/TopItemsList';
import QuickStats from '../components/QuickStats';
import { dashboardMetrics, expenseBreakdown, peakHours, revenueTrend } from '../data/demoData';

export default function DashboardPage() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">Welcome back, Owner</p>
        </div>
        <div className="action-row">
          <button className="icon-button" type="button" aria-label="Refresh">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 12a8 8 0 1 1-3-6.2" />
              <path d="M20 4v6h-6" />
            </svg>
          </button>
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
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <RevenueChart title="Revenue Trend" subtitle="Daily performance overview" data={revenueTrend} />

      <ExpenseBreakdown title="Expense Breakdown" subtitle="By category" data={expenseBreakdown} />

      <TopItemsList />

      <HourlySalesChart title="Peak Hours" subtitle="Average orders by hour" data={peakHours} barColor="#6d4cff" />

      <QuickStats />
    </div>
  );
}
