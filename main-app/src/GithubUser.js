import React, {useEffect, useState} from 'react';

// Custom Hook
function useGithubUser(username) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json);
        setData(json)
      })
  }, [username])

  return{
    data
  }
}

// Component
export function GithubUser({ username }) {
  const {data} = useGithubUser(username)

  return(
    <div>
      {data && <h1>Name: {data.name}</h1>}
      {data && <h1>Location: {data.location}</h1>}
    </div>
  )
}