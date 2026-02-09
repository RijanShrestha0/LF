import './App.css'
import { StudentForm } from './components/StudentForm'

function App() {

  return (
    <>
      {/* <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
      <Input id='Name' text="Enter Full Name" />
      <Input id='Date' type='date' text="Enter BOD" />
      <Select id='gender' options={['Select Gender', 'Male', 'Female', 'Others']} onChange={(value) => console.log('Selected:', value)} /> */}
      <StudentForm />
    </>
  )
}

export default App
