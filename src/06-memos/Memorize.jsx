import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { decrement, increment, counter } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Counter Memo</h1>
      <hr />

      <h2>
        Counter: <Small value={counter}></Small>
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
