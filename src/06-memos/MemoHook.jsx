import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos");
  }

  return `${iterationNumber} realize`;
};

export const MemoHook = () => {
  const { decrement, increment, counter } = useCounter();
  const [show, setShow] = useState(true);

  const messageMemorize = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter Memo</h1>
      <hr />

      <h4>{messageMemorize}</h4>

      <h2>
        Counter: <small>{counter}</small>
      </h2>

      <button className="btn btn-danger" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
