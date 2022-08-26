import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const changeYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeYear={changeYearHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
