import React from 'react';
import Welcome from './Welcome';
import Login from './Login';
import Container from './Container';

 class App extends React.Component {
  state = {
    username: "ugo",
  }

  render() {
    return (
      <Container title="My app">
        <Welcome name={this.state.username}/>
        <Login />
      </Container>
    )
  }
  
}

export default App;
