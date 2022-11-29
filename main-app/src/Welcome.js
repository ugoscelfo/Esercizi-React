import React from 'react';
import Age from './Age';
import { DisplayLanguage } from './DisplayLanguage';
import { Link } from 'react-router-dom';


export default function Welcome(props) {
  return(
    <div className='welcome'>
      <DisplayLanguage />
      <p>Welcome, <strong>{props.name}</strong></p>
      <Age age={30} />
      <Link to="/counter">Go to the Counter</Link>
      <br />
      <Link to="users/ugoscelfo">Go to the github user</Link>
    </div>
  )
}