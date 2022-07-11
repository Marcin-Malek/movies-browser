import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    peopleList: [],
    personDetails: {},
    fetchPeopleStatus: "initiated",
    fetchPersonStatus: "initiated"
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeople: (state) => {
            state.fetchPeopleStatus = "initiated"
        },
        fetchPerson: (state) => {
            state.fetchPersonStatus = "initiated"
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.peopleList = payload.people;
            state.fetchPeopleStatus = "completed"
        },
        fetchPersonSuccess: (state, { payload }) => {
            state.personDetails = payload.person;
            state.fetchPersonStatus = "completed"
        },
        fetchPeopleError: (state) => {
            state.fetchPeopleStatus = "error"
            state.fetchPersonStatus = "error"
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

export const selectPeopleList = (state) => state.people.peopleList;

export const selectPersonDetails = (state) => state.people.personDetails;

export const selectFetchPeopleStatus = (state) => state.people.fetchPeopleStatus;

export const selectFetchPersonStatus = (state) => state.people.fetchPersonStatus;

export default peopleSlice.reducer;
