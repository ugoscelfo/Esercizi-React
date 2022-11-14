import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import Counter from './Counter';
import ClickTracker from './ClickTracker';
import InteractiveWelcome from './InteractiveWelcome';

 class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" />
        <Counter initialValue={0} incrementBy={1}/>
        <br />
        <ClickTracker />
        <InteractiveWelcome name={this.props.name}/>
      </div>
    )
  }
  
}

export default App;
