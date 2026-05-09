function TransactionForm({
  text,
  setText,
  amount,
  setAmount,
  type,
  setType,
  date,
  setDate,
  category,
  setCategory,
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

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />

        <br /><br />

        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
        <option value="Bills">Bills</option>
        </select>

      <button onClick={addTransaction}>
        Add Transaction
      </button>

      <hr />

    </div>
  );
}

export default TransactionForm;