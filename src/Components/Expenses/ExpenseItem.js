import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {

    //to output dynamic data we use a special syntax ({}) React gives you inside of these JSX code snippets
    //We can make our components reusable by using parameters and a concept called 'props'
    //We don't have direct access to the HTML code output by some components in other components.Components can't use data stored in other components

    //return statement should have only one root element
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;