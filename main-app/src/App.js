import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Counter} from './Counter';
import { Link } from 'react-router-dom';
import Container from './Container';

import Welcome from './Welcome';
import { GithubUser } from './GithubUser';

export default function App() {
  return (
    <div>
      <Container title="My app">
        <ul>
        <li><Link to="/welcome">Welcome</Link></li>
        <br />
        <li><Link to="/counter">Go to the Counter</Link></li>
        <br />
        <li><Link to="/githubuser">Github user</Link></li>
        </ul>
      </Container>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/welcome" element={<Welcome name={"ugo"}/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/githubuser" element={<GithubUser username="ugoscelfo" />} >
        </Route>
      </Routes>
    </div>
    
    
  )
}
