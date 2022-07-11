import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeople,
    fetchPeopleSuccess,
    fetchPersonSuccess,
    fetchPerson,
} from "./peopleSlice";


function* fetchPeopleHandler({ payload: page }) {
    try {
        const peopleList = yield axios.get(`https://api.themoviedb.org/3/person/popular?api_key=b6338a2fff00b848e44db36dd695b802&page=${page}`);
        yield put(fetchPeopleSuccess({ people: peopleList.data.results }));
    } catch (error) {
        yield put(fetchPeopleError());
        console.error(error);
    }
}

function* fetchPersonHandler({ payload: id }) {
    try {
        const personDetails = yield axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=b6338a2fff00b848e44db36dd695b802&append_to_response=combined_credits`);
        yield put(fetchPersonSuccess({ person: personDetails.data }));
    } catch (error) {
        yield put(fetchPeopleError());
        console.error(error);
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield takeLatest(fetchPerson.type, fetchPersonHandler);
}