import React from 'react';
import Container from './Container';
import { Login } from './Login';
import Welcome from './Welcome';

export default function App() {

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        <Login />
      </Container>
    </div>
  )
}
