import PropTypes from 'prop-types';

const Item = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

Item.prototype = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Item;
