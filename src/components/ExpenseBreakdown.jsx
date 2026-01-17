import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { expenseBreakdown } from '../data/demoData';

const colors = ['#8B5CF6', '#6366F1', '#10B981', '#F59E0B', '#38BDF8'];

export default function ExpenseBreakdown() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Expense Breakdown</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Monthly split</span>
        </div>
        <span className="badge">$92.7K</span>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={expenseBreakdown} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80}>
              {expenseBreakdown.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 12
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
