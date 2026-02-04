import './App.css'
import BudgetTracker from './components/BudgetTracker'
import Headers from './components/header'

function App() {

  return (
    <>
    <div className='Nav'>
      <Headers title='Budget Tracker' discription='Track your expenses.' />
    </div>
    <BudgetTracker />
    </>
  )
}

export default App
