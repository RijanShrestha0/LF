import './App.css'
import { useState } from 'react'
import { Button } from './components/button'
import Timer from './components/Timer'

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);
  
  const starttimer = () => {
    setIsRunning(true);
  }
  const stoptimer = () => {
    setIsRunning(false);
  }
  
  const resettimer = () => {
    setIsRunning(false);
    // setResetSignal(() => 0);
    setResetSignal((prev) => prev + 1);
  }

  return (
    <>
      <div className='timer'>
        <h1>Timer</h1>
        <Timer time={0} isRunning={isRunning} resetTimer={resetSignal} />
        <Button text='Start' onClick={() => starttimer()} />
        <Button text='Stop' onClick={() => stoptimer()} />
        <Button text='Reset' onClick={() => resettimer()} />
      </div>
    </>
  )
}

export default App
