import React, { useState } from 'react';
import './NewExpense.css';
import Expenseform from './ExpenseForm';
const NewExpense = (props) => {

    //In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a child component. 
    //If that component then calls that function,it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {/* true && expression always evaluates to expression, and false && expression always evaluates to false. */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <Expenseform onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
};

export default NewExpense;