import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
