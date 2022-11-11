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
        <Counter initialValue={0} incrementBy={1} timeout={1000}/>
      </div>
    )
  }
  
}

export default App;
