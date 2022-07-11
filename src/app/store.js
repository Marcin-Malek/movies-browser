import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import moviesReducer from '../features/movies/moviesSlice';
import peopleReducer from '../features/people/peopleSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
