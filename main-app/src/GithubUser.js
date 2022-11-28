import React, {useEffect, useState} from 'react';

// Custom Hook
function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const json = await response.json()
      setData(json)
      if(response.status !== 200) {
        setError(new Error())
      }
    } catch(error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGithubUser(username)
  }, [username])

  return{
    data,
    loading,
    error
  }
}

// Component
export function GithubUser({ username }) {
  const {data, loading, error} = useGithubUser(username)

  return(
    <div>
      {loading && <h1>Loading</h1>}
      {error && <h1>Something is wrong</h1>}
      {data && <h1>Name: {data.name}</h1>}
      {data && <h1>Location: {data.location}</h1>}
    </div>
  )
}