import PropTypes from 'prop-types';
import { Status, UserAvatar, UserName } from './FriendList.styled';

export default function FriendListItem({ avatarUrl, userName, status }) {
    return (
        <>
             <Status userStatus={status}></Status>
            <UserAvatar src={avatarUrl} alt="User avatar" width="48" />
            <UserName>{userName}</UserName>
        </>
    );
};

FriendListItem.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};