import PropTypes from 'prop-types';

import css from './transactionHistory.module.css';

const Row = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Row.prototype = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Row;
