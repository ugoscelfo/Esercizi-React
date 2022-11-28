import React, { useState } from 'react';


//  Custom Hook
function useForm() {
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

  function handleInputUpdate(event) {
    event.preventDefault();
    console.log(data);
  }

  return{
    data,
    handleInputChange,
    handleInputUpdate
  }
}

export function Login() {
  const {data, handleInputChange, handleInputUpdate} = useForm()

  return(
    <div>
      <label>Username: 
        <input name="username" value={data.username} onChange={handleInputChange}/>
      </label>
      <label>Password: 
        <input name="password" type="password" value={data.password} onChange={handleInputChange} />
      </label>
      <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
      <button onClick={handleInputUpdate}>Update</button>
    </div>
  )
}