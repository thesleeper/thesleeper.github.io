
import React from "react"
import { nanoid } from "nanoid";
export default function ExpenseList(props) {

    const expenseListHTML = props.expenses.map(item => {
        return <div key={nanoid()} >
            <button onClick={(event) => props.deleteExpense(event, item.id)}>x</button>
            {item.id} {item.expenseCost} - {item.expenseName}
            <br />
        </div>
    });

    return (
        <div>
            <h3>expense list : </h3>
            <br />
            {expenseListHTML}
        </div>
    )
}