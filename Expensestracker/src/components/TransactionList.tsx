import type { Transaction } from "../App";
import TransactionItem from "./TransactionItem";

type Props = {
  transactions: Transaction[];
};

function TransactionList({ transactions }: Props) {
  return (
    <>
    <div className="transaction-list">
      <h3>History</h3>
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </div>
    </>
  );
}

export default TransactionList;