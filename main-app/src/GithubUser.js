import React from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then((response) => response.json())

// Custom Hook
function useGithubUser(username) {
  const {data, error} = useSWR(username !== null ? `https://api.github.com/users/${username}` : null, fetcher)
  
  return{
    data,
    error,
    isLoading: !data && !error
  }
}

// Component
export function GithubUser({ username }) {
  const {data, error, isLoading} = useGithubUser(username)

  return(
    <div>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>Something is wrong</h1>}
      {data && <h1>Name: {data.name}</h1>}
      {data && <h1>Location: {data.location}</h1>}
    </div>
  )
}