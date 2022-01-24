import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List, ListItem } from './FriendList.styled';

export default function FriendList({ items }) {
    return (
        <List>
            {items.map(({ id, avatar, name, isOnline }) => (
                <ListItem key={id}>
                     <FriendListItem
                        avatarUrl={avatar}
                        userName={name}
                        status={isOnline}
                    />
                </ListItem>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};