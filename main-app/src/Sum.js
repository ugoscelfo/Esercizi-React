import React from 'react';

export function Sum({ numbers = [1, 2, 3, 4] }) {
  // default value can be assigned directly in the parameter
  const sum = numbers.reduce((add, number) => {
    return add + number;
  }, 0);
  
  return(
    <h1>Sum: {sum}</h1>
  )
}