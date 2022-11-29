import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Counter} from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { Link } from 'react-router-dom';
import Container from './Container';

import Welcome from './Welcome';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/welcome" element={<Welcome name={"ugo"}/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
      <Container title="My app">
        <ul>
        <li><Link to="/welcome">Welcome</Link></li>
        <br />
        <li><Link to="/counter">Go to the Counter</Link></li>
        <br />
        <li><Link to="users/ugoscelfo">Go to the github user</Link></li>
        </ul>
      </Container>
    </div>
    
    
  )
}
