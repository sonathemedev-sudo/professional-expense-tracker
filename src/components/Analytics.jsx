function Analytics({ categoryTotals }) {

  return (
    <div className="summary">

      <h2>Analytics</h2>

      {
        Object.entries(categoryTotals).map(
          ([category, total]) => (

            <div key={category}>

              <h4>
                {category}: ₹ {total}
              </h4>

            </div>
          )
        )
      }

    </div>
  );
}

export default Analytics;