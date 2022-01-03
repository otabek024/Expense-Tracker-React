import React from 'react'
import ExpenseItem from "./ExpenseItem"
import "../App.css"

const NewExpenses = (props) => {

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
    <div className='expenses'>
       <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  )
}

export default NewExpenses
