import RevenueChart from '../components/RevenueChart';
import HourlySalesChart from '../components/HourlySalesChart';
import { salesTransactions } from '../data/demoData';

export default function SalesPage() {
  return (
    <div style={{ display: 'grid', gap: 20 }}>
      <header>
        <h1 style={{ marginBottom: 6 }}>Sales</h1>
        <p style={{ color: 'var(--color-muted)', margin: 0 }}>Revenue trends and recent transactions.</p>
      </header>

      <RevenueChart />
      <HourlySalesChart />

      <div className="card">
        <div className="card-header">
          <div>
            <div style={{ fontWeight: 600 }}>Recent Transactions</div>
            <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Live feed</span>
          </div>
          <span className="badge">3 new</span>
        </div>
        <div className="list">
          {salesTransactions.map((transaction) => (
            <div key={transaction.id} className="list-item">
              <div>
                <div style={{ fontWeight: 600 }}>{transaction.id}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{transaction.time}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600 }}>{transaction.amount}</div>
                <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{transaction.method}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
