import React, { useContext } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';

export const Balance = () => {

    const { Expense,Income } = useContext(AppContext)

    const Total = Expense.reduce((sum, item) => {
        return (sum += item.amount)
    }, 0)
    return (
        <div className="container-fluid  justify-content-space-between">
            <div className="text-center mb-5">
                <h2>Your Monthly Income is: ${Income}</h2>
            </div>
            <div className="d-flex">
                <div className="balance card">
                    <h4>Your Balance is: ${Income - Total}</h4>
                </div>
                <div className="balance card">
                    <h4>Your Total Expense is: ${Total}</h4>
                </div>
            </div>
        </div>
    );

}