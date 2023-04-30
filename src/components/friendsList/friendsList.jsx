import Friend from './friend';

import css from './friends.module.css';

const FriendList = props => {
  return (
    <ul className={css.friend__list}>
      {props.friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

export default FriendList;
