function Header() {

  const today = new Date();

  const formattedDate =
    today.toDateString();

  return (
    <div className="header">

      <div>

        <h1>Expense Tracker</h1>

        <p>{formattedDate}</p>

      </div>

    </div>
  );
}

export default Header;