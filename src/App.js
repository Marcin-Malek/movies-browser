import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './common/Navigation';
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from './features/movies/MoviePage';
import { PeopleList } from "./features/people/PeopleList";
import { NoResults } from './common/NoResults';

const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to="movies" />} />
      <Route path="/movies" element={<Navigate to="page=1" />} />
      <Route path="movies/page=:page" element={<MovieList />} />
      <Route path="movies/:id" element={<MoviePage />} />
      <Route path="people" element={<PeopleList />} />
      <Route path="people/:id" />
      <Route path="movies/noResults" element={<NoResults result="Search" />} />
    </Routes>
  </HashRouter>
);

export default App;
