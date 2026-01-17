import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { hourlySales } from '../data/demoData';

export default function HourlySalesChart() {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>Hourly Sales</div>
          <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>Today&apos;s order volume</span>
        </div>
        <span className="badge">Peak 7 PM</span>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={hourlySales}>
            <XAxis dataKey="hour" stroke="rgba(148,163,184,0.5)" />
            <YAxis stroke="rgba(148,163,184,0.5)" />
            <Tooltip
              contentStyle={{
                background: '#0f172a',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 12
              }}
            />
            <Bar dataKey="orders" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
