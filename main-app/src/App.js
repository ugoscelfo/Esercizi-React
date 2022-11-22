import React from 'react';
import Container from './Container';
import { Login } from './Login';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title="My app">
          <Welcome name={"ugo"}/>
          <Login />
        </Container>
      </div>
    )
  }
  
}

export default App;
