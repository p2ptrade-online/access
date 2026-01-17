export default function DateFilter() {
  return (
    <div className="card" style={{ display: 'grid', gap: 12 }}>
      <div style={{ fontWeight: 600 }}>Filter Analytics</div>
      <div style={{ display: 'grid', gap: 12 }}>
        <select>
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 30 Days</option>
          <option>Custom Range</option>
        </select>
        <select>
          <option>All Categories</option>
          <option>Food</option>
          <option>Beverage</option>
          <option>Dessert</option>
        </select>
        <select>
          <option>All Payment Methods</option>
          <option>Apple Pay</option>
          <option>Visa</option>
          <option>Amex</option>
          <option>Cash</option>
        </select>
      </div>
    </div>
  );
}
