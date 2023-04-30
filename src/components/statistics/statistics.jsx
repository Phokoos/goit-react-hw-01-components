import PropTypes from 'prop-types';
import Item from './item';

const Staticstics = props => {
  return (
    <section className="statistics">
      {props.title && <h2 className="title">{props.title}</h2>}
      <ul className="stat-list">
        {props.stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Staticstics.prototype = {
  title: PropTypes.string,
};

export default Staticstics;
