import type { Transaction } from "../App";

type Props = {
  item: Transaction;
};

function TransactionItem({ item }: Props) {
  return (
    <div>
      <span>{item.text}</span>
      <span>
        {item.amount > 0 ? "+" : ""}
        {item.amount}
      </span>
    </div>
  );
}

export default TransactionItem;