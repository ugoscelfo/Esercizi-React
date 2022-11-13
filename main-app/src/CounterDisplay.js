import React from 'react';
import ClickCounter from './ClickCounter';

class CounterDisplay extends React.Component {
  render () {
    return (
      <div>
        <ClickCounter initialValue={0} incrementBy={1}/>
      </div>
    )
  }
};

export default CounterDisplay;