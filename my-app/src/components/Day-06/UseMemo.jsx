import { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [counterTwo, setCounterTwo] = useState(100);
  const heavyCalculation = useMemo(() => HeavyCalculation(counter), [counter]);
  // here the result of HeavyCalculation(counter) is cached or saved and useMemo hooks checks that whether the result of this function is changed or not if it is not changed it dosenot execute the funciton again instead returns the cached value Hence increases the performance

  function HeavyCalculation(counter) {
    for (let i = 0; i < 1000000000; i++) {
      counter++;
    }
    return counter;
  }

  return (
    <div>
      <h1>Use Memo Page</h1>

      <h2>Counter : {counter}</h2>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        +
      </button>

      <h2>Counter 2: {counterTwo}</h2>
      <button className="btn" onClick={() => setCounterTwo(counterTwo + 1)}>
        +
      </button>

      <h2>Heavy Calculations : {heavyCalculation}</h2>

      
    </div>
  );
};

export default UseMemo;

// use memo is a hook in react that caches the result between re render
