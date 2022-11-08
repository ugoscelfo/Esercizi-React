import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';

 class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="ugo" age={30} />
      </div>
    )
  }
  
}

export default App;
