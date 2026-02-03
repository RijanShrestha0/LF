import { useState } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import "./App.css";

export type Transaction = {
  id: number;
  text: string;
  amount: number;
};

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<"income" | "expense">("income");

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const submitHandler = () => {
    if (text === "" || amount <= 0) return;

    const finalAmount = type === "income" ? amount : -amount;

    addTransaction({
      id: Date.now(),
      text,
      amount: finalAmount,
    });

    setText("");
    setAmount(0);
    setType("income");
  };

  return (
    <>
    <div className="app-container">
      <h1>Expense Tracker</h1>

      <Balance transactions={transactions} />
      
      <h3>Add Transaction</h3>

      <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onFocus={() => setAmount(0)}
        onBlur={(e) => e.target.placeholder = "Enter amount"}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button onClick={submitHandler}>Add</button>
    </div>
      <TransactionList transactions={transactions} />      
    </>
  );
}

export default App;