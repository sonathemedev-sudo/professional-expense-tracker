import TransactionCard from "./TransactionCard";

function TransactionList({
  filteredTransactions,
  deleteTransaction,
  editTransaction
}) {

  return (
    <div className="table-section">

      <div className="table-header">
        <h2>Recent Transactions</h2>
      </div>

      {
        filteredTransactions.length === 0 ? (

          <h3>No Transactions Found</h3>

        ) : (

          <table>

            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {
                filteredTransactions.map((item, index) => (

                  <TransactionCard
                    key={index}
                    item={item}
                    index={index}
                    deleteTransaction={deleteTransaction}
                    editTransaction={editTransaction}
                  />

                ))
              }

            </tbody>

          </table>

        )
      }

    </div>
  );
}

export default TransactionList;