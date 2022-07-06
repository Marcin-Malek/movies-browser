import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moviesList: [],
    moviesGenres: [],
    fetchStatus: "initiated",
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMoviesList: (state, payload) => {
            state.moviesList = payload;
        },
        setMoviesGenres: (state, payload) => {
            state.moviesGenres = payload;
        },
        startFetching: (state) => {
            state.fetchStatus = "initiated"
        },
        handleFetchingError: (state) => {
            state.fetchStatus = "error"
        },
        finishFetching: (state) => {
            state.fetchStatus = "completed"
        },
        fetchMovies: () => { },
    },
});

export const {
    setMoviesList,
    setMoviesGenres,
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchMovies,
} = moviesSlice.actions;

export const selectMoviesList = (state) => state.movies.moviesList.payload;

export const selectFetchStatus = (state) => state.movies.fetchStatus;

export const selectMoviesGenres = (state) => state.movies.moviesGenres.payload;

export default moviesSlice.reducer;
