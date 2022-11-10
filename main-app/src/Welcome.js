import React from 'react';
import Age from './Age';

const name = "ugo";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, <strong>{name}!</strong></p>
        <Age age={30}/> 
      </div>
    )
  }
}

export default Welcome;