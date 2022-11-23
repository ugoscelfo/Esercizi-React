import React, { useState, useEffect } from 'react';

export function Counter(){
  const [count, setCount] = useState(0);

  // mount and unmount
  useEffect(() => {
    console.log("I have mounted");

    return () => {
      console.log("I am about to be unmounted");
    };
  }, []);   

  // clean up function
  useEffect(() => {
    console.log(`Count: ${count}`);

    return () => {
      console.log(`The Count was: ${count}`);
    };
  }, [count]); 

  // Interval
  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}
