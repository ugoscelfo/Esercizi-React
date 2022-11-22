import React, { useState } from 'react';

export function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false
  })

  function handleInputChange(event) {
    const {name, type, value, checked} = event.target

    setData((data) => {
      return{
        ...data, 
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return(
    <div>
      <label>Username: 
        <input name="username" value={data.username} onChange={handleInputChange}/>
      </label>
      <label>Password: 
        <input name="password" type="password" value={data.password} onChange={handleInputChange} />
      </label>
      <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
    </div>
  )
}