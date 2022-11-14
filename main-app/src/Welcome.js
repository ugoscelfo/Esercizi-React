import React from 'react';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.name === "John" && ( */}
          <div>
            <p>Welcome, <strong>{this.props.name}</strong></p>
            <Age age={18} />
          </div>
        {/* )} */}
      </div>
    )
  } 
};

export default Welcome;