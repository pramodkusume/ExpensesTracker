import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    //useState accepts an initial state and returns two values:
    // 1.The current state.
    // 2.A function that updates the state.

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    // Updating state that depends on the previous state
    // setUserInput((previousState)=>{
    //     return {...previousState,enteredTitle: event.target.value}
    // })

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        //  Two-Way Binding - we don't just listen to changes in the input to update our state.
        // But we also feed the state back into the input so that when we change the state, we also change input.

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        //When a user submits a form (the submit button clicked),
        // the default action of the form is to submit the form's data to a URL that processes the data. 
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;