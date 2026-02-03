type AddProps = {
  count: number;
  setCount: (value: number) => void;
};

function Add({ count, setCount }: AddProps) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Add
    </button>
  );
}

export default Add;