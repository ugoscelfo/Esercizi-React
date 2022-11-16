import React from 'react';

class TodoList extends React.Component {
  state = {
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
        items:[...this.state.items, this.state.input]
    })
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
          <input onChange={this.handleInputAdd}></input>
          <button onClick={this.handleButtonAdd}>Add</button>
        </ul>
      </div>
    );
  }
};

export default TodoList;