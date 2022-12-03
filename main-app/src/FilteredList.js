import React, { useMemo } from 'react';

export function FilteredList ({ users }) {
  users = [
    {
      username: 'Jeff',
      id: 1,
      age: 17,
    },
    {
      username: 'Alan',
      id: 2,
      age: 30,
    },
    {
      username: 'Mary',
      id: 3,
      age: 19,
    },
  ]

  const usersAdults = useMemo(() => users.filter(user => user.age >= 18),[users]);
  const renderAdults = usersAdults.map(user => <li key={user.username}>{user.username}</li>);

  return (
    <div>
      <h1>Current Adults Users:</h1>
      <ul>
        {renderAdults}
      </ul>
    </div>
  )
}