import React, { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function counterIncrement() {
    setCount(count => count + 1)
  };

  function counterDecrement() {
    setCount(count => count === initialValue ? 0 : count - 1)
  };

  function counterReset() {
    setCount(initialValue)
  };

  return{
    counter: count,
    onIncrement: counterIncrement,
    onDecrement: counterDecrement,
    onReset: counterReset
  }
}

export function ClickCounter({ initialValue = 0 }) {
  const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

  return(
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}