import React from 'react';

class Age extends React.Component {
  render() {
    return (
      <div>
      {this.props.age >= 18 && <p>Your age is {this.props.age}</p>}
      </div>
    )
  }
};

export default Age;
