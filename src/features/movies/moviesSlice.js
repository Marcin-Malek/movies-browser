import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageCount: 500,
    moviesList: [],
    moviesGenres: [],
    movieDetails: {},
    moviesFetchStatus: "initiated",
    movieFetchStatus: "initiated",
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
            state.moviesFetchStatus = "initiated";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.moviesList = payload.movies.results;
            state.resultCount = payload.movies.total_results;
            state.pageCount = payload.movies.total_pages;
            state.moviesFetchStatus = "completed";
        },
        fetchError: (state) => {
            state.moviesFetchStatus = "error";
            state.movieFetchStatus = "error";
        },
        fetchMovie: (state) => {
            state.movieFetchStatus = "initiated";
        },
        fetchMovieSuccess: (state, { payload }) => {
            state.movieDetails = payload.movie;
            state.movieFetchStatus = "completed";
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

export const selectMoviesFetchStatus = (state) => state.movies.moviesFetchStatus;

export const selectMovieFetchStatus = (state) => state.movies.movieFetchStatus;

export const selectMovieDetails = (state) => state.movies.movieDetails;

export default moviesSlice.reducer;
