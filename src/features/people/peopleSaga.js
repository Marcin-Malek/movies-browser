import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import {
    fetchPeopleError,
    fetchPeople,
    fetchPeopleSuccess,
    fetchPerson,
} from "./peopleSlice";


function* fetchPeopleHandler() {
    try {
        const peopleList = yield axios.get("https://api.themoviedb.org/3/person/popular?api_key=b6338a2fff00b848e44db36dd695b802&page=1");
        yield put(fetchPeopleSuccess({people: peopleList.data.results}));
        console.log(peopleList);
    } catch (error) {
        yield put(fetchPeopleError());
        console.error(error);
    }
}

function* fetchPersonHandler({ payload: id }) {
    try {
        const personDetails = yield axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=b6338a2fff00b848e44db36dd695b802&append_to_response=combined_credits`);
        yield put(fetchPeopleSuccess({person: personDetails.data}));
        // console.log(personDetails);
    } catch (error) {
        yield put(fetchPeopleError());
        console.error(error);
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
    yield takeLatest(fetchPerson.type, fetchPersonHandler);
}