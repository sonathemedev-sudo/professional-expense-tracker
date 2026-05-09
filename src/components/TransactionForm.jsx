function TransactionForm({
  text,
  setText,
  amount,
  setAmount,
  type,
  setType,
  addTransaction
}) {

  return (
    <div>

      <input
        type="text"
        placeholder="Enter title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <br /><br />

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      <hr />

    </div>
  );
}

export default TransactionForm;