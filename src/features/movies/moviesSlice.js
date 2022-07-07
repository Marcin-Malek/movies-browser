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
        fetchGenres: () => { },
        fetchGenresSuccess: (state, { payload }) => {
            state.moviesGenres = payload.genres;
        },
        fetchMovies: (state) => {
            state.fetchStatus = "initiated";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.moviesList = payload.movies;
            state.fetchStatus = "completed";
        },
        fetchError: (state) => {
            state.fetchStatus = "error";
        },
    },
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchMovies,
    fetchMoviesSuccess,
    fetchSearchedMovies,
    fetchSearchedMoviesSuccess,
    fetchError,
} = moviesSlice.actions;

export const selectMoviesList = (state) => state.movies.moviesList;

export const selectMoviesGenres = (state) => state.movies.moviesGenres;

export const selectFetchStatus = (state) => state.movies.fetchStatus;

export default moviesSlice.reducer;
