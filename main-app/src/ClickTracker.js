import React from 'react';

class ClickTracker extends React.Component {
  state = {
    pressed: "",
  }

  buttonEvent = (event) => {
    this.setState({
      pressed: event.target.innerText,
    })
  };

  render() {
    return(
      <div>
        <button onClick={this.buttonEvent}>1</button>
        <button onClick={this.buttonEvent}>2</button>
        <button onClick={this.buttonEvent}>3</button>
        <h1>Last button that was pressed: {this.state.pressed}</h1>
      </div>
    )
  }
};

export default ClickTracker;