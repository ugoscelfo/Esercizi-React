import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from './Container';
import {FilteredList} from './FilteredList';

export default function App() {
  return (
    <div>
      <Container title="My app">
        <ul>
          <li><Link to="/filteredList">Filtered</Link></li>
        </ul>
      </Container>
      <Routes>
        <Route path="/filteredList" element={<FilteredList />}/>
      </Routes>
    </div>
  )
}
