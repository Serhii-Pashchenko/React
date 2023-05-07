import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h3 className="title">Counter</h3>
      <p>{count}</p>
      <button onClick={() => decrement(count - 1)}>Decrement</button>
      <button onClick={() => increment(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter;