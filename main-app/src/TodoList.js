import React from 'react';

class TodoList extends React.Component {
  state = {
    input: "",
    items: [
      "item 1", "item 2", "item 3", "item 4"]
  };

  handleInputAdd = (event) => {
    event.preventDefault();
    this.setState({ 
      input: event.target.value
    })
  };

  handleButtonAdd = (event) => {
    event.preventDefault()
    this.setState({
        items:[...this.state.items, this.state.input],
        input: "",
    })
  };

  reset = (event) => {
    event.preventDefault();
    this.setState({
      items: []
    })
  }
;
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
          <input value={this.state.input} onChange={this.handleInputAdd}></input>
          <button onClick={this.handleButtonAdd}>Add</button>
          <button type='reset' onClick={this.reset}>Reset</button>
        </ul>
      </div>
    );
  }
};

export default TodoList;