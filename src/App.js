import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './common/Navigation';
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from './features/movies/MoviePage';
import { PeopleList } from "./features/people/PeopleList";
import { ErrorPage } from './common/ErrorPage';

const App = () => (
  <HashRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Navigate to="movies" replace />} />
      <Route path="movies" element={<MovieList />} />
      <Route path="people" element={<PeopleList />} />
      <Route path="movies/:id" element={<MoviePage />} />
      <Route path="people/:id" />
      <Route path="error" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
);

export default App;
