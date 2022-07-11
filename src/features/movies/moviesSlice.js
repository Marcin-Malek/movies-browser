import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageCount: 500,
    moviesList: [],
    moviesGenres: [],
    movieDetails: {},
    fetchMoviesStatus: "initiated",
    fetchMovieStatus: "initiated",
    fetchGenresStatus: "initiated",
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchGenres: () => { },
        fetchGenresSuccess: (state, { payload }) => {
            state.moviesGenres = payload.genres;
            state.fetchGenresStatus = "completed";
        },
        fetchMovies: (state) => {
            state.fetchMoviesStatus = "initiated";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.moviesList = payload.movies.results;
            state.pageCount = payload.movies.total_pages;
            state.fetchMoviesStatus = "completed";
        },
        fetchError: (state) => {
            state.fetchMoviesStatus = "error";
            state.fetchMovieStatus = "error";
        },
        fetchMovie: (state) => {
            state.fetchMovieStatus = "initiated";
        },
        fetchMovieSuccess: (state, { payload }) => {
            state.movieDetails = payload.movie;
            state.fetchMovieStatus = "completed";
        },
    },
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresStatus,
    fetchMovies,
    fetchMoviesSuccess,
    fetchError,
    fetchMovie,
    fetchMovieSuccess,
} = moviesSlice.actions;

export const selectPageCount = (state) => state.movies.pageCount;

export const selectMoviesList = (state) => state.movies.moviesList;

export const selectMoviesGenres = (state) => state.movies.moviesGenres;

export const selectFetchMoviesStatus = (state) => state.movies.fetchMoviesStatus;

export const selectFetchMovieStatus = (state) => state.movies.fetchMovieStatus;

export const selectFetchGenresStatus = (state) => state.movies.fetchGenresStatus;

export const selectMovieDetails = (state) => state.movies.movieDetails;

export default moviesSlice.reducer;
