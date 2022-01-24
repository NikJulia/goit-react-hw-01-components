import PropTypes from 'prop-types';
import { DocType } from './Statistics.styled';

export default function StatiscticsItem({ label, percentage }) {
    return (
        <>   
            <DocType>{label}</DocType>
            <span className="percentage">{percentage}</span>
        </>
    );
};

StatiscticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};