import { useState } from "react";
import type { Transaction } from "../App";

type Props = {
  onAdd: (transaction: Transaction) => void;
};

function TransactionForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);

    onAdd({
      id: Date.now(),
      text,
      amount,
    });

    setText("");
    setAmount(0);
  };

export default TransactionForm;