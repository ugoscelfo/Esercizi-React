import React, { useState } from 'react';

export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function counterIncrement() {
    setCount(count => count + 1)
  };

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={counterIncrement}>Increment</button>
    </div>
  )
}