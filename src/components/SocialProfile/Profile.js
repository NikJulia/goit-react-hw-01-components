import PropTypes from 'prop-types';
import { 
    ProfileCard, 
    ProfileDesc, 
    ProfileImg, 
    ProfileName, 
    ProfileTag, 
    ProfileLocation, 
    ProfileStats, 
    ProfileStatsItem 
} from './Profile.styled';

export default function Profile({ username: userName, tag, location, avatar: avatarUrl, stats: { followers, views, likes } }) {
    return (
        <ProfileCard>
            <ProfileDesc>
                <ProfileImg
                src={avatarUrl}
                alt="User avatar"
                />
                <ProfileName>{userName}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileDesc>

            <ProfileStats>
                <ProfileStatsItem>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </ProfileStatsItem>
                <ProfileStatsItem>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </ProfileStatsItem>
            </ProfileStats>
        </ProfileCard>
    );
};

Profile.protoTypes = {
    data: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string,
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
};