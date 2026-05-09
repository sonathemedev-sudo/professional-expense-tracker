function Header() {

  const today = new Date();

  return (
    <div className="header">

      <div>
        <h1>Expense Dashboard</h1>
        <p>
          Track your income and expenses professionally
        </p>
      </div>

      <div className="header-right">
        <h3>{today.toDateString()}</h3>
      </div>

    </div>
  );
}

export default Header;