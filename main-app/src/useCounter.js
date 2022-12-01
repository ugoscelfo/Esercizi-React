import { useCallback, useState } from 'react';

// Custom Hook
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  // useCallback
  const counterIncrement = useCallback(function counterIncrement() {
    setCount(count => count + 1)
  }, [])

  const counterDecrement = useCallback(function counterDecrement() {
    setCount(count => count - 1)
  }, [])

  const counterReset = useCallback(function counterReset() {
    setCount(initialValue)
  }, [initialValue])

  return{
    counter: count,
    onIncrement: counterIncrement,
    onDecrement: counterDecrement,
    onReset: counterReset
  }
}