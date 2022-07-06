import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    setPeopleList,
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchPeople,
} from "./peopleSlice";


function* fetchPeopleHandler() {
    yield put(startFetching());
    try {
        const peopleList = yield axios.get("https://api.themoviedb.org/3/person/popular?api_key=b6338a2fff00b848e44db36dd695b802&language=en-US&page=1");
        yield put(setPeopleList(peopleList));
        yield put(finishFetching());
    } catch (error) {
        yield put(handleFetchingError());
        console.error(error);
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
}