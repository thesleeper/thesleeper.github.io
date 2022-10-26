//styles
import './App.css';

//images
import logo from './logo.svg';
import React from 'react';
//components
import Header from './components/Header';
import Footer from './components/Footer';
import TemplateComponent from './components/TemplateComponent';
import Form from './components/Form';

import ExpenseInput from './components/ExpenseInput';
import ExpenseList from './components/ExpenseList';
import Nav from './components/Nav';

// import { useEffect } from React ;

//scripts

// firebase things
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// firebase.initializeApp({
//   apiKey: "AIzaSyDJ3HcRtMdNyW1NBMPEznEpGjw3yCQ33zI",
//   authDomain: "rs-react-projects.firebaseapp.com",
//   projectId: "rs-react-projects",
//   storageBucket: "rs-react-projects.appspot.com",
//   messagingSenderId: "862797701194",
//   appId: "1:862797701194:web:a58894b7957c170b0f06b3",
//   measurementId: "G-S09ZLKY9MJ"
// })
// const auth = firebase.auth();
// const firestore = firebase.firestore();

export default function App() {

  // function handleClick() {
  //   console.log("Click");
  // }
  // function handleHover() {
  //   console.log("Hover");
  // }

  // const [swData, setSwData] = React.useState({});
  // const [count, setCount] = React.useState(0);
  // console.log("render");


  // React.useEffect(() => {
  //   console.log("effect ran");
  //   // React.useEffect(() => {
  //   //   console.log("fetch");
  //   //   fetch("http://swapi.dev/api/people/1")
  //   //     .then(res => res.json())
  //   //     .then(data => setSwData(data))
  //   // }, [])
  // }, [count])

  // const [showWindow, setShowWindow] = React.useState(false)
  // function toggle() {
  //   setShowWindow((prev) => !prev)
  // }


  //local storage
  // const [notes, setNotes] = React.useState(() => JSON.parse(localStorage.getItem("note")) || [])
  // React.useEffect(() => {
  //   localStorage.getItem("notes");
  //   localStorage.setItem("notes", JSON.stringify(notes))
  // }, [notes])

  const testData = [
    {
      expenseCost: 1,
      expenseName: "food"
    },
    {
      expenseCost: 2,
      expenseName: "car"
    },
    {
      expenseCost: 3,
      expenseName: "baby"
    },
  ]

  const newData =
  {
    expenseCost: 4,
    expenseName: "wife"
  }

  function saveExpense(obj) {
    console.log("saving expense " + obj);
    const newExpense = obj;
    setExpenses(prev => [...prev, obj])
  }

  function deleteExpense(event, noteId) {
    console.log(noteId)
    setExpenses(prev => prev.filter(expense =>
      expense.id !== noteId
    ))
  }

  function clearLocalStorage() {
    console.log("Clear local storage")
    localStorage.clear();
  }


  function GetExpenses() {
    return JSON.parse(localStorage.getItem("expenses"))
    //firebase

  }
  const [expenses, setExpenses] = React.useState(
    GetExpenses ||
    [])

  React.useEffect(() => {
    localStorage.getItem("expenses");
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])


  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <ExpenseInput saveExpense={saveExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </header>

      <button onClick={clearLocalStorage}>CLEAR LOCALSTORAGE</button>

      {/* <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>

      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label> */}


      {/* <img src={logo} className="App-logo" alt="logo" />
        <h2> count is {count}</h2>
        {showWindow && <Header />}
        {/* <button onClick={() => setCount(prevCount => prevCount + 1)}>xxx</button>
        <button onClick={toggle}>Toggle Window Tracker</button> */}


    </div>
  );
}

