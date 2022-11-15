import React from 'react';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';

 class App extends React.Component {
  render() {
    return (
      <div>
        <InteractiveWelcome name={this.props.name}/>
        <Login />
        <UncontrolledLogin />
      </div>
    )
  }
  
}

export default App;
