import React from "react";
import "./App.css";
import NewExpenses from "./components/NewExpenses";

function App(props) {
  return (
    <div className="container">
      <h1 className="title">Expense Item</h1>
      <NewExpenses expenses={props.expenses} />
    </div>
  );
}

export default App;
