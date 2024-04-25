const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((netIncome, index) => (
          <tr key={index}>
            <td>{netIncome.brand}</td>
            <td>{netIncome.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
