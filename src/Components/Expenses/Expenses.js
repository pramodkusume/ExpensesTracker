import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    //The state is a built-in React object that is used to contain data or information about the component. 
    //The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.  

    //useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. 
    //Calling that function will then also trigger React to re-evaluate the component.

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    }
    );

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;