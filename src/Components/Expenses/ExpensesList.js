import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>

    }

    return <ul className='expenses-list'>
        {/* mapping every expense in the expenses array into an expense item JSX element which are then rendered by React..*/}
        {props.expenses.map((expense) => (
            //A “key” is a special string attribute you need to include when creating lists of elements in React.
            //Keys are used in React to identify which items in the list are changed, updated, or deleted.
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))}
    </ul>
};
export default ExpensesList;