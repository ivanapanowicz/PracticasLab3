import "./App.css";
import Table from "./components/table/Table";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const averageNetIncomes = (
    netIncomes.reduce((totalIncome, item) => totalIncome + item.income, 0) /
    netIncomes.length
  ).toFixed(2);

  return (
    <>
      <Table netIncomes={netIncomes} />
      <p>Average: {averageNetIncomes}</p>
    </>
  );
}

export default App;
