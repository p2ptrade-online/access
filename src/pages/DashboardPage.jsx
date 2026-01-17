import MetricCard from '../components/MetricCard';
import RevenueChart from '../components/RevenueChart';
import ExpenseBreakdown from '../components/ExpenseBreakdown';
import CustomerGrowthChart from '../components/CustomerGrowthChart';
import HourlySalesChart from '../components/HourlySalesChart';
import TopItemsList from '../components/TopItemsList';
import DateFilter from '../components/DateFilter';
import QuickStats from '../components/QuickStats';
import { dashboardMetrics } from '../data/demoData';

export default function DashboardPage() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <header>
        <h1 style={{ marginBottom: 6 }}>Restaurant Overview</h1>
        <p style={{ color: 'var(--color-muted)', margin: 0 }}>Today, Sep 18 · Downtown Flagship</p>
      </header>

      <div className="metric-grid">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <DateFilter />

      <div className="metric-grid">
        <RevenueChart />
        <ExpenseBreakdown />
      </div>

      <div className="metric-grid">
        <CustomerGrowthChart />
        <HourlySalesChart />
      </div>

      <div className="metric-grid">
        <TopItemsList />
        <QuickStats />
      </div>
    </div>
  );
}
