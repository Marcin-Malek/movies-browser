import { takeLatest, call, put, } from "redux-saga/effects";
import { getPopularMovies } from "./getPopularMovies";
import {
    setMoviesList,
    startFetching,
    handleFetchingError,
    finishFetching,
} from "./moviesSlice";

function* fetchMoviesHandler() {
    yield put(startFetching());
    try {
        const moviesList = yield call(getPopularMovies);
        yield put(setMoviesList(moviesList));
    } catch (error) {
        yield put(handleFetchingError());
        console.error(error);
    }
    yield put(finishFetching());
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}