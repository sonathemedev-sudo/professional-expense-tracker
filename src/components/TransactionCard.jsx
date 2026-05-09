import { motion } from "framer-motion";

function TransactionCard({
  item,
  index,
  deleteTransaction,
  editTransaction
}) {

  return (

    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >

      <td>{item.text}</td>

      <td>₹ {item.amount}</td>

      <td>
        <span className={item.type}>
          {item.type}
        </span>
      </td>

      <td>
        <span className="badge">
          {item.category}
        </span>
      </td>

      <td>{item.date}</td>

      <td>

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

      </td>

    </motion.tr>
  );
}

export default TransactionCard;