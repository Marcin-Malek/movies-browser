import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    fetchError,
    fetchMoviesSuccess,
    fetchMovies,
    fetchMovie,
    fetchMovieSuccess,
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

function* fetchMovieHandler({ payload: id }) {
    try {
        const movie = yield axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b6338a2fff00b848e44db36dd695b802&append_to_response=credits`);
        yield put(fetchMovieSuccess({ movie: movie.data }));
    } catch (error) {
        yield put(fetchError());
        yield console.error(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
}