import React from 'react';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';

 class App extends React.Component {
  render() {
    return (
      <div>
        <InteractiveWelcome name={this.props.name}/>
        <Login />
      </div>
    )
  }
  
}

export default App;
