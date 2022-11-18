import React from 'react';
import Welcome from './Welcome';
import Login from './Login';

 class App extends React.Component {
  state = {
    username: "ugo",
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.username}/>
        <Login />
      </div>
    )
  }
  
}

export default App;
