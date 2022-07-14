import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Navigation } from './common/Navigation';
import { MovieList } from "./features/movies/MovieList";
import { MoviePage } from './features/movies/MoviePage';
import { fetchGenres } from './features/movies/moviesSlice';
import { PeopleList } from "./features/people/PeopleList";
import { PersonPage } from './features/people/PersonPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch])

  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="movies" />} />
        <Route path="/movies" element={<Navigate to="page=1" />} />
        <Route path="/people" element={<Navigate to="page=1" />} />
        <Route path="movies/page=:page" element={<MovieList />} />
        <Route path="people/page=:page" element={<PeopleList />} />
        <Route path="movies/:id" element={<MoviePage />} />
        <Route path="people/:id" element={<PersonPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
