import React from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
  state = {
      count: this.props.initialValue,
    }
  
  constructor(props) {
    super(props)
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        }
      })
    }, this.props.timeout);
  }

  render() {
    return (
      <CounterDisplay count={this.state.count} />
    )
  }
};

export default Counter; 