import React from 'react';
import Age from './Age';


export default function Welcome(props) {
  return(
    <div className='welcome'>
      <p>Welcome, <strong>{props.name}</strong></p>
      <Age age={30} />
    </div>
  )
}