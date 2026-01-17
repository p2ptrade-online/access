import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { customerGrowth } from '../data/demoData';

export default function CustomerGrowthChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Customer Growth</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Weekly active customers</span>
        </div>
        <span className="badge">+18%</span>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={customerGrowth}>
            <XAxis dataKey="name" stroke="rgba(148,163,184,0.5)" />
            <YAxis stroke="rgba(148,163,184,0.5)" />
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 12
              }}
            />
            <Area type="monotone" dataKey="customers" stroke="#8B5CF6" fill="rgba(139, 92, 246, 0.35)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
