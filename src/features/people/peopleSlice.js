import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    peopleList: [],
    fetchStatus: "initiated",
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeopleList: (state, payload) => {
            state.peopleList = payload;
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
    startFetching,
    handleFetchingError,
    finishFetching,
    fetchPeople,
    fetchMovies,
} = peopleSlice.actions;

export const selectPeopleList = (state) => state.people.peopleList.payload;

export const selectFetchStatus = (state) => state.people.fetchStatus;

export default peopleSlice.reducer;
