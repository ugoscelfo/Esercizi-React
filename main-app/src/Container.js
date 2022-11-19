import React from 'react'

class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Container;
