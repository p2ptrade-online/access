import ExpenseBreakdown from '../components/ExpenseBreakdown';
import { expenseTransactions } from '../data/demoData';

export default function ExpensesPage() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <header>
        <h1 style={{ marginBottom: 6 }}>Expenses</h1>
        <p style={{ color: 'var(--color-muted)', margin: 0 }}>Track your operating costs.</p>
      </header>

      <ExpenseBreakdown />

      <div className="card">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 600 }}>Recent Expenses</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Last 7 days</span>
          </div>
          <span className="badge">$6.5K</span>
        </div>
        <div className="list">
          {expenseTransactions.map((transaction) => (
            <div key={transaction.id} className="list-item">
              <div>
                <div style={{ fontWeight: 600 }}>{transaction.category}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{transaction.date}</span>
              </div>
              <div style={{ fontWeight: 600 }}>{transaction.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
