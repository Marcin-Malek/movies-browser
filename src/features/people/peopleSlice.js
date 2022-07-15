import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageCount: 500,
    peopleList: [],
    personDetails: {},
    peopleFetchStatus: "initiated",
    personFetchStatus: "initiated"
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeople: (state) => {
            state.peopleFetchStatus = "initiated"
        },
        fetchPerson: (state) => {
            state.personFetchStatus = "initiated"
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.peopleList = payload.people.results;
            state.resultCount = payload.people.total_results;
            state.pageCount = payload.people.total_pages;
            state.peopleFetchStatus = "completed"
        },
        fetchPersonSuccess: (state, { payload }) => {
            state.personDetails = payload.person;
            state.personFetchStatus = "completed"
        },
        fetchPeopleError: (state) => {
            state.peopleFetchStatus = "error"
            state.personFetchStatus = "error"
        },


    },
});

export const {
    fetchPeopleSuccess,
    fetchPersonSuccess,
    fetchPeopleError,
    fetchPeople,
    fetchPerson
} = peopleSlice.actions;

export const selectPeoplePageCount = (state) => state.people.pageCount;

export const selectPeopleResultCount = (state) => state.people.resultCount;

export const selectPeopleList = (state) => state.people.peopleList;

export const selectPersonDetails = (state) => state.people.personDetails;

export const selectPeopleFetchStatus = (state) => state.people.peopleFetchStatus;

export const selectPersonFetchStatus = (state) => state.people.personFetchStatus;

export default peopleSlice.reducer;
