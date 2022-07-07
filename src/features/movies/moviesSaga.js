import axios from "axios";
import { takeLatest, delay, put } from "redux-saga/effects";
import {
    fetchError,
    fetchMovies,
    fetchMoviesSuccess,
    fetchSearchedMovies,
    fetchSearchedMoviesSuccess,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: page }) {
    try {
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        const moviesGenres = yield axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US");
        yield put(fetchMoviesSuccess({ movies: moviesList.data.results, genres: moviesGenres.data.genres }));
    } catch (error) {
        yield put(fetchError());
        yield console.error(error);
    }
}

function* fetchSearchedMoviesHandler({ payload: query }) {
    try {
        const searchedMovies = yield axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b6338a2fff00b848e44db36dd695b802&query=${query}`);
        yield delay(300);
        yield put(fetchSearchedMoviesSuccess({ movies: searchedMovies.data.results }));
    } catch (error) {
        yield put(fetchError());
        yield console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchSearchedMovies.type, fetchSearchedMoviesHandler);
}