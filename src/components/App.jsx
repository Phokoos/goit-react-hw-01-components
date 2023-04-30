import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from './profile/profile';
import Staticstics from './statistics/statistics';
import FriendList from './friendsList/friendsList';
import TransactionHistory from './transactionHistory/transactionHistory';

import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Staticstics stats={data} />
      <Staticstics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
