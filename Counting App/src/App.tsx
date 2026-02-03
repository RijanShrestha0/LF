import { useState } from "react";
import Add from "./components/add";
import Sub from "./components/Sub";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <Add count={count} setCount={setCount} />
      <Sub count={count} setCount={setCount} />
    </>
  );
}

export default App;