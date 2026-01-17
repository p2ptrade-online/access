import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { revenueChartData } from '../data/demoData';

export default function RevenueChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Revenue Trend</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Last 7 days</span>
        </div>
        <span className="badge">$16.5K avg</span>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueChartData}>
            <XAxis dataKey="name" stroke="rgba(148,163,184,0.5)" />
            <YAxis stroke="rgba(148,163,184,0.5)" />
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 12
              }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} />
            <Line type="monotone" dataKey="orders" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
