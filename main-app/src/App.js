import React, { useState } from 'react';
import Container from './Container';
import { Counter } from './Counter';
import Welcome from './Welcome';


export default function App() {
  const [showCount, setShowCount] = useState(true)

  function toggleCount(){
    setShowCount(s => !s)
  }

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        {showCount && <Counter />}
        <button onClick={toggleCount}>Toggle count</button>
      </Container>
    </div>
  )
}
