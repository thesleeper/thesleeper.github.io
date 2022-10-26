import React from "react"

const variableText = "hello hello";

export default function TemplateComponent(props) {

    /*
const card = data.map((item)=>{
    <Card 
        key = {input.id}
        {...item} //spread syntax -- auto fill the props
        data1={input.value1},
        data2={input.value2}
    />
})

// use {card} in body.

    */
    const names = [`aaa`, "bbb", "ccc"];
    const namesHTML = names.map((item) => {
        return <p>{item}</p>;
    })
    return (
        <div>
            "This is a template component" {props.value1 && <>1:{props.value1}</>} 2:{props.value2} {variableText}
            <br></br>
            <br></br>
            <br></br>
            {namesHTML}
        </div>
    )
}

const test = {
    value1: "A",
    value2: "B"
}
const { value1, value2 } = test
console.log("YOYOYO " + value1);

const nums = [1, 2, 3, 4, 5];
const sq = nums.map((item) => {
    return item * item
});
console.log(sq);

const names = ["aaa", "bbb", "ccc"];
const upperNames = names.map((item) => {
    return item[0].toUpperCase() + item.slice(1)
})
console.log(upperNames);