import React from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
  state = {
      count: this.props.initialValue,
    };
  
  counterIncrement = () => {
    this.setState(state => {
      return {
        count: this.state.count + this.props.incrementBy
      }
    })
  };

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} /> 
      </div>
    )
  }
};

export default Counter; 