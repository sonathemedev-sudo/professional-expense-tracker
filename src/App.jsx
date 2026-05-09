import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"
import Analytics from "./components/Analytics"
import ExpenseChart from "./components/ExpenseChart"
import Header from "./components/Header"
import { ToastContainer, toast } from "react-toastify"
import Footer from "./components/Footer"
import "react-toastify/dist/ReactToastify.css"

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

  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Food");



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

  const categoryTotals = {};

  transactions.forEach((item) => {

    if (categoryTotals[item.category]) {

      categoryTotals[item.category] += Number(item.amount);

    } else {

      categoryTotals[item.category] = Number(item.amount);
    }
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
    type,
    date,
    category
  };

  if (editIndex !== null) {

    const updatedTransactions = [...transactions];

    updatedTransactions[editIndex] = newTransaction;

    setTransactions(updatedTransactions);
    toast.success("Transaction Added");

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
    setDate("");
    setCategory("Food");
  }

  function deleteTransaction(indexToDelete) {

    const updatedTransactions = transactions.filter(
      (_, index) => index !== indexToDelete
    );

    setTransactions(updatedTransactions);
    toast.error("Transaction Deleted");
  }

  function editTransaction(index) {

    const transaction = transactions[index];

    setText(transaction.text);
    setAmount(transaction.amount);
    setType(transaction.type);
    setDate(transaction.date);
    setCategory(transaction.category);

    setEditIndex(index);
  }

  function clearAllTransactions() {
    setTransactions([]);
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>

        <Header />

        {/* <button
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button> */}
        <div className="smry_anylst_wrpr">
          <SummaryCard
            balance={balance}
            income={income}
            expense={expense}
            total={filteredTransactions.length}
          />

          <div className="analytics-grid">

            <Analytics
              categoryTotals={categoryTotals}
            />

            <ExpenseChart
              categoryTotals={categoryTotals}
            />

          </div>
        </div>

        <hr />

        <div className="form-section">

          <h2>Add Transaction</h2>

          <TransactionForm
            text={text}
            setText={setText}
            amount={amount}
            setAmount={setAmount}
            type={type}
            setType={setType}
            date={date}
            setDate={setDate}
            category={category}
            setCategory={setCategory}
            addTransaction={addTransaction}
          />

        </div>

        <hr />

        <div className="filter-section">

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

        </div>

        <TransactionList
          filteredTransactions={filteredTransactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />

        <ToastContainer />

        <Footer />

    </div>
  );
}

export default App;