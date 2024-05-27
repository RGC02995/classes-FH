import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>

      <hr />

      <button className="btn btn-primary" onClick={() => decrement(10)}>
        -1
      </button>
      <button className="btn btn-success" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-danger" onClick={() => increment(10)}>
        +1
      </button>
    </>
  );
};
