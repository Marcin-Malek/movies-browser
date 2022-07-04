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

function* fetchMoviesHandler() {
    yield put(startFetching());
    try {
        const moviesList = yield axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=1");
        const movieGenres = yield axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US");
        yield put(setMoviesList(moviesList));
        yield put(setMoviesGenres(movieGenres));
        yield put(finishFetching());
    } catch (error) {
        yield put(handleFetchingError());
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}