function CryptoRow({ name, symbol, priceToman, priceUsdt, change }) {
  return (
    <tr>
      <td>
        <strong>{symbol}</strong> <br />
        <span>{name}</span>
      </td>

      <td>{priceToman}</td>
      <td>{priceUsdt}</td>

      <td style={{ color: change > 0 ? "green" : change < 0 ? "red" : "gray" }}>
        {change > 0 && "+"}
        {change}%
      </td>

      <td>
        <button> خرید و فروش آنی </button>
      </td>
    </tr>
  );
}

export default CryptoRow;
