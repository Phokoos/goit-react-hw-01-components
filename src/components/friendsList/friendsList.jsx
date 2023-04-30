import PropTypes from 'prop-types';
import Friend from './friend';

const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;
