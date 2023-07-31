import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isClicked,setClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setClicked(false);
  };
  const buttonHandler=()=>{
          setClicked(true);

  };
  const buttonChangeHandler=()=>{
                 setClicked(false);
  };

  return (
    <div className='new-expense'>
     {!isClicked && <button onClick={buttonHandler}>Add New Expense</button>}
     {isClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} buttonChange={buttonChangeHandler}/>}
    </div>
  );
};

export default NewExpense;
