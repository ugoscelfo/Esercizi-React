import React from 'react';

export function Sum(props) {
  const numbers = [1, 2, 3, 4]
  const sum = numbers.reduce((add, number) => {
    return add + number;
  }, 0);
  
  return(
    <h1>Sum: {sum}</h1>
  )
}