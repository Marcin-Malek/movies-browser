import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageCount: 500,
    moviesList: [],
    moviesGenres: [],
    movieDetails: {},
    fetchMoviesStatus: "initiated",
    fetchMovieStatus: "initiated",
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
            state.fetchMoviesStatus = "initiated";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.moviesList = payload.movies.results;
            state.resultCount = payload.movies.total_results;
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
    fetchMovies,
    fetchMoviesSuccess,
    fetchError,
    fetchMovie,
    fetchMovieSuccess,
} = moviesSlice.actions;

export const selectPageCount = (state) => state.movies.pageCount;

export const selectResultCount = (state) => state.movies.resultCount

export const selectMoviesList = (state) => state.movies.moviesList;

export const selectMoviesGenres = (state) => state.movies.moviesGenres;

export const selectFetchMoviesStatus = (state) => state.movies.fetchMoviesStatus;

export const selectFetchMovieStatus = (state) => state.movies.fetchMovieStatus;

export const selectMovieDetails = (state) => state.movies.movieDetails;

export default moviesSlice.reducer;
