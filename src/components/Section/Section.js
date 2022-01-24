import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
    return (
        <SectionContainer>
            {title && <SectionTitle>{title}</SectionTitle>}
            {children}
        </SectionContainer>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};