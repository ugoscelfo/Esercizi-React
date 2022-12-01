import React from 'react';
import { CarDetails } from './CarDetails';
import Container from './Container';
import Welcome from './Welcome';

export default function App() {

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        <CarDetails />
      </Container>
    </div>
  )
}
