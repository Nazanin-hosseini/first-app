function TableRow({ name, symbol, price, change }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{price}</td>
      <td>{change}</td>
    </tr>
  );
}

export default TableRow;
