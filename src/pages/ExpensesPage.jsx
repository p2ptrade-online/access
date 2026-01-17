import ExpenseBreakdown from '../components/ExpenseBreakdown';
import HourlySalesChart from '../components/HourlySalesChart';
import { expenseBreakdown, expenseMonthlyTrend, expenseTransactions, expensesSummary } from '../data/demoData';

const iconMap = {
  food: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 3v8" />
      <path d="M8 3v8" />
      <path d="M4 7h4" />
      <path d="M14 3h6" />
      <path d="M17 3v18" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  ),
  drink: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 3h14l-1 9H6L5 3z" />
      <path d="M8 21h8" />
      <path d="M10 12v9" />
      <path d="M14 12v9" />
    </svg>
  ),
  ads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12h18" />
      <path d="M7 12l5-5 5 5" />
      <path d="M7 12l5 5 5-5" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  )
};

export default function ExpensesPage() {
  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1 className="page-title">Expenses</h1>
          <p className="page-subtitle">Track your costs</p>
        </div>
        <div className="action-row">
          <button className="icon-button" type="button" aria-label="Add">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
          <div className="chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <path d="M8 2v4M16 2v4M3 10h18" />
            </svg>
            30 Days
          </div>
        </div>
      </header>

      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, #f43f5e, #db2777)',
          color: '#fff',
          display: 'grid',
          gap: 6
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.85 }}>Total Expenses</div>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{expensesSummary.total}</div>
        <div style={{ fontSize: 12, opacity: 0.9 }}>↘ {expensesSummary.delta}</div>
      </div>

      <ExpenseBreakdown title="By Category" subtitle="" data={expenseBreakdown} />

      <HourlySalesChart
        title="Monthly Trend"
        subtitle="6-month expense history"
        data={expenseMonthlyTrend.map((item) => ({ hour: item.month, value: item.value }))}
        xKey="hour"
        barColor="#ef476f"
      />

      <div className="card">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 600 }}>Recent Expenses</div>
            <span className="page-subtitle">Latest transactions</span>
          </div>
        </div>
        <div className="list">
          {expenseTransactions.map((transaction) => (
            <div key={transaction.name} className="list-item" style={{ background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="metric-icon" style={{ width: 34, height: 34, background: '#f3f4f8', color: '#6b7280' }}>
                  {iconMap[transaction.icon]}
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{transaction.name}</div>
                  <span className="page-subtitle">{transaction.category}</span>
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
