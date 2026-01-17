import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const colors = ['#3f5cff', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export default function ExpenseBreakdown({ title, subtitle, data }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>{title}</div>
          <span className="page-subtitle">{subtitle}</span>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '140px 1fr', alignItems: 'center' }}>
        <div style={{ width: '140px', height: '140px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={42} outerRadius={60} paddingAngle={2}>
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="list" style={{ gap: 10 }}>
          {data.map((entry, index) => (
            <div key={entry.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: colors[index % colors.length] }} />
                <span>{entry.name}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, color: '#475569', fontWeight: 600 }}>
                <span>{entry.value}%</span>
                {entry.amount && <span>{entry.amount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
