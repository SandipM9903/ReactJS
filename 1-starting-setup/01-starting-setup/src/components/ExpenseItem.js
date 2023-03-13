import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  //   const expenseDate = new Date(2023, 2, 28);
  //   const expenseTitle = "Car Insurance";
  //   const expenseAmount = 296.67;

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
