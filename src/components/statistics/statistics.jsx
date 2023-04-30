import PropTypes from 'prop-types';
import Item from './item';

import css from './statistics.module.css';

const Staticstics = props => {
  return (
    <section className={css.statistics}>
      {props.title && <h2 className={css.title}>{props.title}</h2>}
      <ul className={css.statistics__list}>
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
