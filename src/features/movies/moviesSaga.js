import axios from "axios";
import { takeLatest, delay, put, select, debounce } from "redux-saga/effects";
import {
    fetchError,
    fetchGenres,
    fetchGenresSuccess,
    fetchMovies,
    fetchMoviesSuccess,
    fetchSearchedMovies,
    fetchSearchedMoviesSuccess,
    selectPage,
    selectSearchPage,
} from "./moviesSlice";

function* fetchGenresHandler() {
    try {
        const moviesGenres = yield axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US");
        yield put(fetchGenresSuccess({ genres: moviesGenres.data.genres }));
    } catch (error) {
        yield put(fetchError());
        yield console.error(error);
    }
}

function* fetchMoviesHandler() {
    try {
        const page = yield select(selectPage);
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        yield put(fetchMoviesSuccess({ movies: moviesList.data }));
    } catch (error) {
        yield put(fetchError());
        console.error(error);
    }
}

function* fetchSearchedMoviesHandler({ payload }) {
    try {
        const searchPage = yield select(selectSearchPage);
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b6338a2fff00b848e44db36dd695b802&query=${payload.query}&page=${searchPage}`);
        yield put(fetchSearchedMoviesSuccess({ movies: moviesList.data }));
    } catch (error) {
        yield put(fetchError());
        console.error(error);
    }
}

export function* moviesSaga() {
    yield debounce(100, fetchGenres.type, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield debounce(300, fetchSearchedMovies.type, fetchSearchedMoviesHandler);
}