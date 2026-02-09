import './App.css'
import { useState } from 'react'
import Form from './components/BudgetForm'
import Headers from './components/Header'

function App() {
  const [expenses, setExpenses] = useState<any[]>([])
  const handleAddExpense = (expense: any) => {
    setExpenses([...expenses, expense])
  }

  return (
    <>
    <div className='Nav'>
      <Headers title='Budget Tracker' discription='Track your expenses.' />
    </div>
    <Form onAddExpense={handleAddExpense} />
    </>
  )
}

export default App