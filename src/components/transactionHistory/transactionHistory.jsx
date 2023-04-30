import Row from './row';

const TransactionHistory = props => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map(({ id, type, amount, currency }) => (
          <Row key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
