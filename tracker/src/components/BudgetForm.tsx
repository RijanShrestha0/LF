import './BudgetForm.css'
import { useState } from 'react'
import { Button } from './button';
import { Input } from './Input';

interface BudgetFormProps {
  onAddExpense: (expense: any) => void;
}

const BudgetForm = ({ onAddExpense }: BudgetFormProps) => {
    const [expense, setExpense] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (expense && amount && date) {
            onAddExpense({ expense, amount, date })
            setExpense('')
            setAmount('')
            setDate('')
        }
    }

    return (
        <div className="budget-form">
                <h2>Budget Tracker Component</h2>
                <form className="expense-form">
                    <div>
                        <Input id='expense' text="Enter expense..." />
                        <Input id='amount' text="Enter amount..." />
                    </div>
                    <Input id='date' type="date" text="Select date..." />
                    <Button text="Submit" onClick={() => {handleSubmit}} />
                </form>
            </div>
    );
}

export default BudgetForm;