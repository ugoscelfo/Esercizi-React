import React from 'react';
import { ClickCounter } from './ClickCounter';
import Container from './Container';
import Welcome from './Welcome';

export default function App() {

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        <ClickCounter />
      </Container>
    </div>
  )
}
