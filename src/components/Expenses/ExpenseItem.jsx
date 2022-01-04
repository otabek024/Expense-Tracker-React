import React, {useState} from 'react'
import '../../App.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  } 

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item-description'>
        <h2>{title}</h2>
        <div className='expense-item-price'>$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;
