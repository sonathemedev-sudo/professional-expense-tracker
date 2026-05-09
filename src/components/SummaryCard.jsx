function SummaryCard({
  balance,
  income,
  expense,
  total
}) {

  return (

    <div className="summary-grid">

      <div className="summary-card">
        <h4>Balance</h4>
        <h2>₹ {balance}</h2>
      </div>

      <div className="summary-card">
        <h4>Income</h4>
        <h2>₹ {income}</h2>
      </div>

      <div className="summary-card">
        <h4>Expense</h4>
        <h2>₹ {expense}</h2>
      </div>

      <div className="summary-card">
        <h4>Transactions</h4>
        <h2>{total}</h2>
      </div>

    </div>
  );
}

export default SummaryCard;