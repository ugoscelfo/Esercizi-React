import React, {createRef} from 'react';

class UncontrolledLogin extends React.Component {
  focus = createRef()

  handleFormSubmit = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log(username, password, remember);
  }

  componentDidMount() {
    this.focus.current.focus();
}

  render() {
    return(
      <div>
        <h3>Uncontrolled Component</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input ref={this.focus} name="username" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox"  />
          <button type='submit'>Login</button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    )
  }
};

export default UncontrolledLogin;