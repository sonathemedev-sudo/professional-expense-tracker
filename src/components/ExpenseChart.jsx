import {
  PieChart,
  Pie,
  Tooltip,
  Cell
} from "recharts";

function ExpenseChart({ categoryTotals }) {

  const data = Object.entries(categoryTotals).map(
    ([category, total]) => ({
      name: category,
      value: total
    })
  );

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AA336A"
  ];

  return (
    <div className="chart-container">

      <h2>Expense Chart</h2>

      <PieChart width={350} height={300}>

        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >

          {
            data.map((entry, index) => (

              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))
          }

        </Pie>

        <Tooltip />

      </PieChart>

    </div>
  );
}

export default ExpenseChart;