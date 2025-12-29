import TableRow from "./TableRow";
import cryptoData from "../data/cryptoData";

function Table() {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>نام ارز</th>
          <th>نماد</th>
          <th>قیمت</th>
          <th>تغییرات</th>
        </tr>
      </thead>

      <tbody>
        {cryptoData.map((item) => (
          <TableRow
            key={item.id}
            name={item.name}
            symbol={item.symbol}
            price={item.price}
            change={item.change}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
