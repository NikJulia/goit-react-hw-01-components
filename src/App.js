import user from 'data/user';
import friends from 'data/friends';
import data from 'data/data';
import transactions from 'data/transactions';

import { MainContainer } from 'App.styled';
import Section from 'components/Section/Section';
import Profile from 'components/SocialProfile/Profile';
import FriendList from 'components/FriendList/FriendList';
import Statistics from 'components/Statistics/Statistics';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <MainContainer>
      <Section title="User Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
        
      <Section title="Friends">
        <FriendList items={friends} />
      </Section>

      <Section>
        <Statistics items={data} />
      </Section>

      <Section title="Transaction History">
        <TransactionHistory items={transactions} />
      </Section>
    </MainContainer>
  );
}
