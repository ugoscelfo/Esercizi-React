import React, {useState} from 'react';
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
      <ul>
        {data.users.map((username, index) => 
          <li key={index}>
            <GithubUser username={username} />
          </li>
        )}
      </ul>
      <input value={data.input} onChange={handleInputAdd}></input>
      <button onClick={handleButtonAdd}>Add</button>
    </div>
  )
}