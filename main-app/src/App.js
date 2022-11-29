import React from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import {Counter} from './Counter';
import { ShowGithubUser } from './ShowGithubUser';

import Welcome from './Welcome';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name={"ugo"}/>} />
      <Route path="/counter" element={<Counter />} />
      <Route path="users/:username" element={<ShowGithubUser />} />
    </Routes>
  )
}
