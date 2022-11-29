import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {GithubUser} from './GithubUser'

export function GithubUserList(){
  const [data, setData] = useState({
    inputField: "",
    users: [],
  });

  function handleInputAdd (event) {
    event.preventDefault();
    setData((data) => {
      return{
        input: event.target.value,
        users: [...data.users]
      }
    })
  };

  function handleButtonAdd (event) {
    event.preventDefault();
    setData((data) => {
        return{
        users: [...data.users, data.input],
        input: "",
        }
    })
  };

  return(
    <div>
      <h1>Users</h1>
      {/* <ul>
        <li>
        <Link to="/users/ugoscelfo">User 1</Link>
        </li>
        <li>
        <Link to="/users/TheBernieA">User 2</Link>
        </li>
      </ul> */}
      <ul>
        {data.users.map((username, index) => 
          <li key={index}>
            <Link to="/users/:username">{username}</Link>
          </li>
        )}  
      </ul>
      <input value={data.input} onChange={handleInputAdd}></input>
      <button onClick={handleButtonAdd}>Add</button>

      <Outlet />
    </div>
  )
}