import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Counter} from './Counter';

import Welcome from './Welcome';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name={"ugo"}/>} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  )
}
