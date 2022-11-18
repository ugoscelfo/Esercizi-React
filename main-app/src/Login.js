import React from 'react';

class Login extends React.Component{
  state = {
    username: "",
    password: "",
    remember: false,
    buttonDisabled: true
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    const disabled = event.target.disabled;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
      [name]: type === "button" ? disabled : value,
      buttonDisabled: value === "" ? true : false
    })
  }

  onLogin = (event) => {
    this.setState({
        username: this.state.username,
        password: this.state.password,
        remember: this.state.remember
    })
}

handleResetState = () => {
  this.setState({
    username: "",
    password: "",
    remember: false
  })
}

  render(){
    const LoginBtnStyle = {
      backgroundColor: this.state.password.length < 8 ? "red " : "green"
    }

    return(
      <div>
        <div>
          <button onClick={this.handleResetState}>Reset</button>
        </div>
        <label>Surname: 
          <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
        </label>
        <label>Password: 
          <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
        </label>
        <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
        <button name="login" type="button" disabled={this.state.buttonDisabled} onChange={this.handleInputChange} onClick={this.onLogin} style={LoginBtnStyle}>Login</button>
      </div>
    )
  }
}

export default Login;