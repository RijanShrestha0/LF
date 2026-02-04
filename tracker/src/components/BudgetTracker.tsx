import './BudgetTracker.css'
import { Button } from './button';
import { Input } from './Input';

const BudgetTracker = () => {
    return (
        <div className="budget-tracker">
            <div>
                <h2>Budget Tracker Component</h2>
                <form>
                    <Input id='expense' text="Enter expense..." />
                    <Input id='amount' text="Enter amount..." />
                    <Input id='date' type="date" text="Select date..." />
                    <Button text="Submit" onClick={() => { }} />
                </form>
            </div>

            <div>
                <h3>Expenses</h3>
            </div>
        </div>
    );
}

export default BudgetTracker;