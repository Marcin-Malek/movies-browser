import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    peopleList: [],
    personDetails: {},
    fetchStatus: "initiated",
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeople: (state) => {
            state.fetchStatus = "initiated"
        },
        fetchPerson: (state) => {
            state.fetchStatus = "initiated"
        },
        fetchPeopleSuccess: (state, { payload }) => {
            state.peopleList = payload.people;
            state.personDetails = payload.person;
            state.fetchStatus = "completed"
        },
        fetchPeopleError: (state) => {
            state.fetchStatus = "error"
        },

        
    },
});

export const {
    fetchPeopleSuccess,
    fetchPeopleError,
    fetchPeople,
    fetchPerson
} = peopleSlice.actions;

export const selectPeopleList = (state) => state.people.peopleList;

export const selectPersonDetails = (state) => state.people.personDetails;

export const selectFetchStatus = (state) => state.people.fetchStatus;

export default peopleSlice.reducer;
