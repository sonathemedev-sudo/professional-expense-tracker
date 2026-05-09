function SummaryCard({
  balance,
  income,
  expense,
  total
}) {

  return (
    <div className="summary">

      <h2>Balance: ₹ {balance}</h2>

      <h3>Income: ₹ {income}</h3>

      <h3>Expense: ₹ {expense}</h3>

      <h3>Total Transactions: {total}</h3>

      <hr />

    </div>
  );
}

export default SummaryCard;