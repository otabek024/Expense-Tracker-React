import React, {useState} from 'react'
import '../../App.css'

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.title)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  return (
    <form className='expense-form'>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input type="date" min="2022-01-04" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
