import React from 'react';
import Container from './Container';
import { GithubUserList } from './GithubUserList';
import Welcome from './Welcome';


export default function App() {

  return (
    <div>
      <Container title="My app">
        <Welcome name={"ugo"}/>
        <GithubUserList />
      </Container>
    </div>
  )
}
