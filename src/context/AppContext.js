import { createContext,useReducer } from "react"

const AppReducer = (state, action) => {
	switch (action.type) {
        case 'ADD_EXPENSE':
        return{
            ...state,
            Expense : [...state.Expense, action.payload]
        };
        case 'DELETE_EXPENSE':
        return{
            ...state,
            Expense : state.Expense.filter(
                (e) => e.id !== action.payload
            ),
        };
		default:
			return state;
	}
};
const initialState = {
    Balance : 2000,
    Income : 15000,
    Expense : [
        {id : 1, transaction : 'Grocery', amount : 50},
        {id : 2, transaction : 'Fees', amount : 500},
        {id : 3, transaction : 'Medicines', amount : 20}
    ]
}
export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    return(
        <AppContext.Provider
            value = {{ 
            Income : state.Income,
            Balance : state.Balance,
            Expense : state.Expense,
            dispatch,
            }}
        >
        {props.children}
        </AppContext.Provider>
    )
}