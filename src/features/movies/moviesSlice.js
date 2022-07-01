import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moviesList: [],
    fetchStatus: "initiated",
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMoviesList: (state, payload) => {
            state.moviesList = payload;
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

export const { fetchMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies.moviesList;

export const selectFetchStatus = (state) => state.movies.moviesList;

export default counterSlice.reducer;
