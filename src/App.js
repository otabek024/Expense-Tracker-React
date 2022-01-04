import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
  const expenses = [
    {
      title: "JavaScript",
      amount: 9.99,
      date: new Date(2021, 2, 8),
    },
    {
      title: "React js",
      amount: 12.99,
      date: new Date(2022, 1, 3),
    },
    {
      title: "Next js",
      amount: 9.99,
      date: new Date(2020, 4, 7),
    },
  ];
  return (
    <div className="container">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
