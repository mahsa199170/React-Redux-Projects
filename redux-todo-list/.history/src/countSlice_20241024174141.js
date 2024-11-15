import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD_BY_ONE: (state, action) => {
      state.count += action.payload;
    },
    MINUS_ONE: (state, action) => {
      state.count -= 1;
    },
    RESET_NUMBER: (state, action) => {
      state.count = 0;
    },
  },
});

export const selectCount = (state) => state.counter.count;
export const { ADD_BY_ONE, MINUS_ONE, RESET_NUMBER } = countSlice.actions;

export default countSlice.reducer;
