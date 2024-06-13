import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handlerCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handlerCounterReset() {
    setCounter(0);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handlerCounterDecrement}>Decrement</button>
      <button onClick={handlerCounterReset}>Reset</button>
    </div>
  );
}
