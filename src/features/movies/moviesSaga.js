import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    setMoviesList,
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchMovies,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: page }) {
    yield put(startFetching());
    try {
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        yield put(setMoviesList(moviesList));
        yield put(finishFetching());
    } catch (error) {
        yield put(handleFetchingError());
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}