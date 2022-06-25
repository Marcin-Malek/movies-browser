import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './common/Navigation';
import { MovieList } from "./features/MovieList";
import { MoviePage } from './features/MoviePage';
import { PeopleList } from "./features/PeopleList";

const App = () => (
  <HashRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Navigate to="movies" replace />} />
      <Route path="movies" element={<MovieList />} />
      <Route path="people" element={<PeopleList />} />
      <Route path="movies/:id" element={<MoviePage />} />
      <Route path="people/:id" />
    </Routes>
  </HashRouter>
);

export default App;
