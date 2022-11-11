import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';

 class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" />
        <Counter />
      </div>
    )
  }
  
}

export default App;
