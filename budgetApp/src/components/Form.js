
import React, { useTransition } from "react"

export default function Form() {
    const [result, setResult] = React.useState("OK")

    const [things, setThings] = React.useState(["A    ", "thing two"])
    // console.log(things);
    function addThing() {
        const newThing = "thing " + things.length + 1;
        // console.log([...things, newThing]);
        setThings(prev => [...prev, newThing])
    }
    const thingHtml = things.map(item => <p key={item}>{item}</p>)


    const [formData, setFormData] = React.useState(
        {
            value1: "",
            value2: ""
        }
    )
    function handleFormChange(event) {
        //to update object data, put name field on input tags, and onChange on input tags.
        //be sure to init the "value" field of input tag.
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        //submit to api : formdata
    }

    function handleClick() {
        console.log("Click");
        addThing();
        // console.log(things);
    }

    // console.log(thingHtml);
    return (
        <div>
            <button onClick={handleClick} type="submit">Submit</button>
            {thingHtml}
            {/* {things} */}
            {/* {result}
            {thingHtml} */}
            {/* <input type="text" placeholder="..." />
            <input type="text" placeholder="..." />
            {/* <button onClick={OKButton} type="submit">Set OK</button>
            <button onClick={NOButton} type="submit">Set NO</button> */}
        </div>
    )
}