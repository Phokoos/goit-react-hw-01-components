import PropTypes from 'prop-types';

import randomColor from './randomColor';

import css from './statistics.module.css';

const Item = ({ label, percentage }) => {
  return (
    <li
      className={css.statistics__item}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={css.statistics__label}>{label} </span>
      <span className={css.statistics__percentage}>{percentage}%</span>
    </li>
  );
};

Item.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Item;
