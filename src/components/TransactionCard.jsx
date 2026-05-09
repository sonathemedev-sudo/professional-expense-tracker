import { motion } from "framer-motion";

function TransactionCard({
  item,
  index,
  deleteTransaction,
  editTransaction
}) {

  return (
    <motion.div
    className={`transaction-card ${item.type}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    >

      <div className="transaction-top">

        <h3>{item.text}</h3>

        <h3>₹ {item.amount}</h3>

      </div>

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

    </motion.div>
  );
}

export default TransactionCard;