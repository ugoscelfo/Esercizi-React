import React from 'react';
import Welcome from './Welcome';
import Container from './Container';
import TodoList from './TodoList';

 class App extends React.Component {
  state = {
    username: "ugo",
  }

  render() {
    return (
      <Container title="My app">
        <Welcome name={this.state.username}/>

        <TodoList render={(items, remove) => {
          // return(
          //   <ul>
          //     {items.map((item, index) => 
          //       <li key={item + index}>{item}
          //         <button type='button' onClick={remove}>Remove</button>
          //       </li>
          //     )}
          //   </ul>
          // )
          return (
          
          items.map((item, index) => {
            return(
          <div key={index}>
            <li>{item}</li>
            <button onClick={remove}>Remove</button>
          </div>
            )
        })
          
          )
        
          }}

        >
    
        </TodoList>

      </Container>
    )
  }
  
}

export default App;
