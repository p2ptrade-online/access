import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function RevenueChart({ title, subtitle, data }) {
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
          <LineChart data={data} margin={{ left: -12, right: 8, top: 10, bottom: 0 }}>
            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#b2bac8', fontSize: 11 }} />
            <YAxis hide domain={['dataMin - 200', 'dataMax + 200']} />
            <Tooltip
              contentStyle={{
                background: '#ffffff',
                border: '1px solid #e5e7ef',
                borderRadius: 12,
                fontSize: 12
              }}
            />
            <Line type="monotone" dataKey="value" stroke="#3f5cff" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
