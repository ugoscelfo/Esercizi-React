import React from 'react'

const name = "ugo";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, <strong>{name}!</strong></p>
        <p>Your age is {this.props.age}</p>
      </div>
    )
  }
}

export default Welcome;