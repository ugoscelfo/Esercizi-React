import React, { useState, useEffect } from 'react';

export function ClickCounter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function onCounterChange() {
    console.log(`Counting ${count}`);
  }

  //first parameter is the function we want to be triggered
  //second parameter is a dependency array
  useEffect(onCounterChange, [count]);

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