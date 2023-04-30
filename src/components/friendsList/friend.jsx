import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      {isOnline ? (
        <span className="status online"></span>
      ) : (
        <span className="status offline"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
