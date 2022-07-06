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
        setPeopleList: (state, payload) => {
            state.peopleList = payload;
        },
        setPersonDetails: (state, payload) => {
            state.personDetails = payload;
        },
        startFetching: (state) => {
            state.fetchStatus = "initiated"
        },
        handleFetchingError: (state) => {
            state.fetchStatus = "error"
        },
        finishFetching: (state) => {
            state.fetchStatus = "completed"
        },
        fetchPeople: () => { },
    },
});

export const {
    setPeopleList,
    setPersonDetails,
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchPeople,
} = peopleSlice.actions;

export const selectPeopleList = (state) => state.people.peopleList.payload;

export const selectPersonDetails = state => state.people.personDetails.payload;

export const selectFetchStatus = (state) => state.people.fetchStatus;

export default peopleSlice.reducer;
