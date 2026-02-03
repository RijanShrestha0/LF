import type { Transaction } from "../App";

type Props = {
  transactions: Transaction[];
};

function Balance({ transactions }: Props) {
  const balance = transactions.reduce(
    (total, item) => total + item.amount,
    0
  );

  return <h2>Balance: Rs. {balance}</h2>;
}

export default Balance;