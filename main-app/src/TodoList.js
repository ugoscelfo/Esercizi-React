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
  };

  remove = (item) => {
    const arr = this.state.items;
    arr.splice(item, 1);
    this.setState({ 
      arr
     })
  }

  render() {
    return (
      <div>
        
          {this.props.render(this.state.items, this.remove)}

          <input value={this.state.input} onChange={this.handleInputAdd}></input>
          <button onClick={this.handleButtonAdd}>Add</button>
          <button type='reset' onClick={this.reset}>Reset</button>
       
      </div>
    );
  }
};

export default TodoList;