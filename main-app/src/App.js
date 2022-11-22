import React from 'react';
import { ClickCounter } from './ClickCounter';
import Container from './Container';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="My app">
          <Welcome name={"ugo"}/>
          <ClickCounter />
        </Container>
      </div>
    )
  }
  
}

export default App;
