type SubProps = {
  count: number;
  setCount: (value: number) => void;
};

function Sub({ count, setCount }: SubProps) {
  return (
    <button
      onClick={() => setCount(count - 1)}
      disabled={count === 0}
    >
      Subtract
    </button>
  );
}

export default Sub;