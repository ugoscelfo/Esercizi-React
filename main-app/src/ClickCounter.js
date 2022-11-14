import React from 'react';

class ClickCounter extends React.Component {
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

  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.counterIncrement}>Increment</button>
      </div>
    )
  }
};

export default ClickCounter;