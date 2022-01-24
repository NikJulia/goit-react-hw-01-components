import PropTypes from 'prop-types';
import StatiscticsItem from './StatisticsItem';
import { StatisticsGrid, StatisticsEl } from './Statistics.styled';
import { SectionTitle } from 'components/Section/Section.styled';

export default function Statistics({ items }) {
    return (
        <section className="statistics">
            <SectionTitle>Upload stats</SectionTitle>

            <StatisticsGrid>
                {items.map(({ id, label, percentage }) => (
                    <StatisticsEl key={id}>
                        <StatiscticsItem 
                            label={label}
                            percentage={percentage}
                        />
                    </StatisticsEl>
                ))}
            </StatisticsGrid>
        </section>
    );
};

Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};