import Row from './row';

import css from './transactionHistory.module.css';

const TransactionHistory = props => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.table}>
        <tr className={css.main_row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.table}>
        {props.items.map(({ id, type, amount, currency }) => (
          <Row key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
