import React,{useContext, useState} from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { v4 as uuidv4} from 'uuid';
import { AppContext } from '../context/AppContext';


export const AddTransaction = () => {

    const { dispatch } = useContext(AppContext);
    const [ name, setName] = useState('');
    const [ cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const Expense = {
            id : uuidv4(),
            transaction : name,
            amount : parseInt(cost)
        }

        dispatch({
			type: 'ADD_EXPENSE',
			payload: Expense,
		});
    }

    return (
        <div className="text-center mt-4 mb-4 pd-2 pt-2">
            <form className="transaction-form" onSubmit={onSubmit}>
                <h3>Add New Transaction</h3>
                <div className="mt-3 mb-2 transaction-input">
                    <Grid>
                        <TextField id="standard-basic" id="transaction" value={name} label="Transaction Type"
                        onChange={(event) => setName(event.target.value)}
                        required />
                    </Grid>
                </div>
                <div className="mt-3 mb-2 transaction-input">
                    <Grid>
                        <TextField id="standard-basic" type="number" id="amount" value={cost} label="Amount"
                        onChange={(event) => setCost(event.target.value)}
                        required />
                    </Grid>
                </div>
                <div className="mt-4 mb-4">
                    <Button variant="contained" type="submit" color="secondary">Add</Button>
                </div>
            </form>
        </div>
    )

}