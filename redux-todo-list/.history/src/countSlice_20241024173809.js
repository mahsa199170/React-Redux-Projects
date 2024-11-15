import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    ADD_BY_ONE: (state, action) => {
      state.count += 1;
    },
  },
});

export const selectCount = (state) => state.counter.count;
export const { ADD_BY_ONE } = countSlice.actions;

export default countSlice.reducer;
