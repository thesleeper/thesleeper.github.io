
import React from "react"
import { nanoid } from "nanoid";
export default function ExpenseInput(props) {

    const [formData, setFormData] = React.useState({
        id: nanoid(),
        expenseCost: "",
        expenseName: ""
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        console.log(event.target.name);
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitExpense(event) {
        event.preventDefault();

        console.log("save expense")
        console.log(formData)
        //validate input 
        if (formData.expenseCost == "" || formData.expenseName == "") {
            //ok
            alert("please dont put empty fields");
            return;
        }

        //validated.
        props.saveExpense(formData);

        setFormData({
            id: nanoid(),
            expenseCost: "",
            expenseName: ""
        })
        //save value
        //reset fields
        // setFormData(() => {
        //     {
        //         expenseName: "",
        //             expenseCost: ""
        //     }
        // });
    }

    return (
        <form>
            <input
                type="text"
                name="expenseCost"
                placeholder="cost"
                onChange={handleChange}
                value={formData.expenseCost}
            />
            <input
                type="text"
                name="expenseName"
                placeholder="expense name"
                onChange={handleChange}
                value={formData.expenseName}
            />
            <button onClick={(event) => submitExpense(event)}>submit</button>
        </form>
    )
}