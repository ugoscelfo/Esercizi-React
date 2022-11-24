import React from 'react';
import Container from './Container';
import { GithubUser } from './GithubUser';
import Welcome from './Welcome';


export default function App() {

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        <GithubUser username="ugoscelfo"/>
      </Container>
    </div>
  )
}
