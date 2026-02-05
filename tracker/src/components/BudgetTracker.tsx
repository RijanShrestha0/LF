import './BudgetTracker.css'
import { useState } from 'react'
import BudgetForm from './BudgetForm'

const BudgetTracker = () => {
  const [expenses, setExpenses] = useState<any[]>([])

  const addExpense = (expense: any) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker Component</h2>
      <BudgetForm onAddExpense={addExpense} />
      <div className="expense-details">
        <h3>Entered Expenses</h3>

        {expenses.length === 0 && (
          <p>No expenses added yet.</p>
        )}

        {expenses.map((item, index) => (
          <div key={index} className="expense-item">
            <p><strong>Expense:</strong> {item.expense}</p>
            <p><strong>Amount:</strong> {item.amount}</p>
            <p><strong>Date:</strong> {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BudgetTracker