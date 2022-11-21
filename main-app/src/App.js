import React from 'react';
import Container from './Container';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="My app">
          <Welcome name={"ugo"}/>
        </Container>
      </div>
    )
  }
  
}

export default App;
