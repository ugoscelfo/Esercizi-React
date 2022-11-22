import React from 'react';
import Container from './Container';
import { Sum } from './Sum';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="My app">
          <Welcome name={"ugo"}/>
          <Sum />
        </Container>
      </div>
    )
  }
  
}

export default App;
