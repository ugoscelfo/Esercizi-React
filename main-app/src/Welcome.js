import React from 'react';
import Age from './Age';
import { DisplayLanguage } from './DisplayLanguage';


export default function Welcome(props) {
  return(
    <div className='welcome'>
      <DisplayLanguage />
      <p>Welcome, <strong>{props.name}</strong></p>
      <Age age={30} />
    </div>
  )
}