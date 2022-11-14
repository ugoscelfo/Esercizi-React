import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';
import ClickTracker from './ClickTracker';

 class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Ugo</strong>} age={30} />
        <Counter initialValue={0} incrementBy={1}/>
        <br />
        <ClickTracker />
      </div>
    )
  }
  
}

export default App;
