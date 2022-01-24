import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import { Table } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <TransactionHistoryItem
                            type={type}
                            amount={amount}
                            currency={currency} 
                        />
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
};