function TransactionCard({
  item,
  index,
  deleteTransaction,
  editTransaction
}) {

  return (
    <div
      className={`transaction-card ${item.type}`}
    >

      <h3>{item.text}</h3>

      <p>₹ {item.amount}</p>

      <p>{item.type}</p>

      <p>{item.date}</p>

      <span className="badge">
        {item.category}
      </span>

      <button
        onClick={() => editTransaction(index)}
        >
       Edit
       </button>

      <button
        onClick={() => deleteTransaction(index)}
      >
        Delete
      </button>

      <hr />

    </div>
  );
}

export default TransactionCard;