const toneColors = {
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  default: 'var(--color-accent)'
};

export default function MetricCard({ title, value, delta, tone = 'default' }) {
  return (
    <div className="card gradient-accent">
      <div className="card-header">
        <span>{title}</span>
        <span className="badge" style={{ color: toneColors[tone] }}>
          {delta}
        </span>
      </div>
      <h2 style={{ margin: 0 }}>{value}</h2>
    </div>
  );
}
