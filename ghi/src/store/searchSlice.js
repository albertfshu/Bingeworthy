import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    value: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = '';
        },
        filter: (state, action) => {
            state.value = action.payload;
        },
        setSearchResults: (state, action) => {
            state.results = action.payload;
        }
    }
})

export const { reset, filter } = searchSlice.actions;

export default searchSlice.reducer;
