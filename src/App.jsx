import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"

function App() {

  // Define states

  const [transactions, setTransactions] = useState(() => {

  const savedTransactions =
    localStorage.getItem("transactions");

  return savedTransactions
    ? JSON.parse(savedTransactions)
    : [];
  });

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const [editIndex, setEditIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);




  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  const balance = income - expense;

  const filteredTransactions = transactions.filter((item) => {

  const matchesSearch =
    item.text.toLowerCase().includes(search.toLowerCase());

  const matchesFilter =
    filterType === "all" || item.type === filterType;

    return matchesSearch && matchesFilter;
  });

  useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

  }, [transactions]);

  function addTransaction() {

  const newTransaction = {
    text,
    amount,
    type
  };

  if (editIndex !== null) {

    const updatedTransactions = [...transactions];

    updatedTransactions[editIndex] = newTransaction;

    setTransactions(updatedTransactions);

    setEditIndex(null);

  } else {

    setTransactions([
      ...transactions,
      newTransaction
    ]);
  }

    setText("");
    setAmount("");
    setType("expense");
  }

  function deleteTransaction(indexToDelete) {

    const updatedTransactions = transactions.filter(
      (_, index) => index !== indexToDelete
    );

    setTransactions(updatedTransactions);
  }

  function editTransaction(index) {

    const transaction = transactions[index];

    setText(transaction.text);
    setAmount(transaction.amount);
    setType(transaction.type);

    setEditIndex(index);
  }

  function clearAllTransactions() {
    setTransactions([]);
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>

      <h1>Expense Tracker Dashboard</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <SummaryCard
        balance={balance}
        income={income}
        expense={expense}
        total={filteredTransactions.length}
      />

      <hr />

      <TransactionForm
        text={text}
        setText={setText}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        addTransaction={addTransaction}
      />

      <hr />

      <input
        type="text"
        placeholder="Search transaction"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button onClick={clearAllTransactions}>
        Clear All
      </button>

      <TransactionList
        filteredTransactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />

    </div>
  );
}

export default App;