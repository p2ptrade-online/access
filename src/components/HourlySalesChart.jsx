import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default function HourlySalesChart({ title, subtitle, data, xKey = 'hour', barColor = '#7c3aed' }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <div style={{ fontWeight: 600 }}>{title}</div>
          <span className="page-subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: -12, right: 12, top: 10, bottom: 0 }}>
            <XAxis dataKey={xKey} axisLine={false} tickLine={false} tick={{ fill: '#b2bac8', fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #e5e7ef',
                borderRadius: 12,
                fontSize: 12
              }}
            />
            <Bar dataKey="value" fill={barColor} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
