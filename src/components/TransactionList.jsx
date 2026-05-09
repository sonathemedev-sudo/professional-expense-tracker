import TransactionCard from "./TransactionCard";

function TransactionList({
  filteredTransactions,
  deleteTransaction,
  editTransaction
}) {

  return (
    <div>

      {
        filteredTransactions.length === 0 ? (

          <h3>No Transactions Found</h3>

        ) : (
            
          filteredTransactions.map((item, index) => (
            <>
                <h2>Recent Transactions</h2>
                
                <TransactionCard
                key={index}
                item={item}
                index={index}
                deleteTransaction={deleteTransaction}
                editTransaction={editTransaction}
                />
            </>
          ))
        )
      }

    </div>
  );
}

export default TransactionList;