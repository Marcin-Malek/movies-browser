import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moviesList: [],
    moviesGenres: [],
    movieDetails: {},
    fetchStatus: "initiated",
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMovies: (state) => {
            state.fetchStatus = "initiated";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.moviesList = payload.movies;
            state.moviesGenres = payload.genres;
            state.fetchStatus = "completed";
        },
        fetchError: (state) => {
            state.fetchStatus = "error";
        },
        fetchMovie: (state) => {
            state.fetchStatus = "initiated";
        },
        fetchMovieSuccess: (state, { payload }) => {
            state.movieDetails = payload.movie;
            state.fetchStatus = "completed";
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchError,
    fetchMovie,
    fetchMovieSuccess,
} = moviesSlice.actions;

export const selectMoviesList = (state) => state.movies.moviesList;

export const selectMoviesGenres = (state) => state.movies.moviesGenres;

export const selectFetchStatus = (state) => state.movies.fetchStatus;

export const selectMovieDetails = (state) => state.movies.movieDetails;

export default moviesSlice.reducer;
