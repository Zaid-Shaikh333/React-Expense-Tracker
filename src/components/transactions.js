import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import CancelIcon from '@material-ui/icons/Cancel';

export const Transactions = (props) => {
    /*
    const transaction_list = [
            {id : 1, transaction : 'Grocery', amount : 50},
            {id : 2, transaction : 'Fees', amount : 500},
            {id : 3, transaction : 'Medicines', amount : 20}
    ]
    
   */
    const {Expense,dispatch} = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch ({
            type : 'DELETE_EXPENSE',
            payload : props.id,
        })
    }
        
        return (
            <div className="mt-4 mb-4 text-center">
                <h4 className="mt-3 mb-3">Transactions List</h4>
                <ul> 
                    { Expense.map(expense =>      
                    <li>{expense.transaction}: -${expense.amount} <button className="btn btn-outline-danger" onClick={handleDeleteExpense}><i className="fas fa-times"></i></button></li>
                    )}
                </ul>
            </div>
        )
}
/*
<li>Cash: -$20 <button className="btn btn-outline-danger"><i className="fas fa-times"></i></button></li>
                    <li>Cash: -$30 <button className="btn btn-outline-danger"><i className="fas fa-times"></i></button></li>
                    */