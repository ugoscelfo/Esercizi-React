import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Counter} from './Counter';
import { GithubUserList } from './GithubUserList';
import { ShowGithubUser } from './ShowGithubUser';
import { Link } from 'react-router-dom';
import Container from './Container';

import Welcome from './Welcome';

export default function App() {
  return (
    <div>
      <Container title="My app">
        <ul>
        <li><Link to="/welcome">Welcome</Link></li>
        <br />
        <li><Link to="/counter">Go to the Counter</Link></li>
        <br />
        <li><Link to="/users">Github users</Link></li>
        </ul>
      </Container>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>}/>
        <Route path="/welcome" element={<Welcome name={"ugo"}/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />} >
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />}/>
        </Route>
      </Routes>
    </div>
    
    
  )
}
