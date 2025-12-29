import cryptoData from "../data/cryptoData";
import CryptoRow from "./CryptoRow";

function CryptoTable() {
  return (
    <table border="1" cellPadding="10" width="100%">
      <thead>
        <tr>
          <th>رمزارز</th>
          <th>قیمت (تومان)</th>
          <th>قیمت تتری</th>
          <th>تغییرات</th>
          <th>معامله</th>
        </tr>
      </thead>

      <tbody>
        {cryptoData.map((coin) => (
          <CryptoRow
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            priceToman={coin.priceToman}
            priceUsdt={coin.priceUsdt}
            change={coin.change}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
