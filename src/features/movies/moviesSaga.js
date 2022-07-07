import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    fetchMoviesError,
    fetchMoviesSuccess,
    fetchMovies,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload: page }) {
    try {
        const moviesList = yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        const moviesGenres = yield axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US");
        yield put(fetchMoviesSuccess({movies: moviesList.data.results, genres: moviesGenres.data.genres}));
    } catch (error) {
        yield put(fetchMoviesError());
        yield console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}