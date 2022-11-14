import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" && <p>Welcome, <strong>{this.props.name}!</strong></p>}
        <Age age={30}/> 
      </div>
    )
  }
}

export default Welcome;