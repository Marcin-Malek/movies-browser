import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    setMoviesList,
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchMovies,
    setMoviesGenres,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: page }) {
    yield put(startFetching());
    try {
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        const moviesGenres = yield axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US");
        yield put(setMoviesList(moviesList.data.results));
        yield put(setMoviesGenres(moviesGenres.data.genres));
        yield put(finishFetching());
    } catch (error) {
        yield put(handleFetchingError());
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}