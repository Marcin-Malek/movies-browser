import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './common/Navigation';
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from './features/movies/MoviePage';
import { PeopleList } from "./features/people/PeopleList";
import { PersonPage } from './features/people/PersonPage';

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to="movies" />} />
      <Route path="/movies" element={<Navigate to="page=1" />} />
      <Route path="movies/page=:page" element={<MovieList />} />
      <Route path="movies/:id" element={<MoviePage />} />
      <Route path="people/:id" element={<PersonPage />} />
      <Route path="people" element={<PeopleList />} />
    </Routes>
  </HashRouter>
);

export default App;
