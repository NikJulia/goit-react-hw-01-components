import user from 'components/SocialProfile/user';
import friends from 'components/FriendList/friends';
import data from 'components/Statistics/data';
import transactions from 'components/TransactionHistory/transactions';

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
        <Profile data={user} />
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
