import React from 'react';
import Welcome from './Welcome';
import TodoList from './TodoList';

 class App extends React.Component {
  state = {
    username: "ugo",
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.username}/>
        <TodoList />
      </div>
    )
  }
  
}

export default App;
