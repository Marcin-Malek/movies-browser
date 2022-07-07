import axios from "axios";
import { takeLatest, delay, put } from "redux-saga/effects";
import {
    fetchError,
    fetchGenres,
    fetchGenresSuccess,
    fetchMovies,
    fetchMoviesSuccess,
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

function* fetchMoviesHandler({ payload }) {
    try {
        const { page, query } = payload;
        yield query && delay(400);
        const moviesList = query ?
            yield axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b6338a2fff00b848e44db36dd695b802&query=${query}`)
            : yield axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=${page}`);
        yield put(fetchMoviesSuccess({ movies: moviesList.data.results }));
    } catch (error) {
        yield put(fetchError());
        console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}