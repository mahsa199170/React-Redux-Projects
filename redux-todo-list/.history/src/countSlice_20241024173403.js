import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

console.log(state, state.counter, state.counter.count);

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.counter.count;

export default countSlice.reducer;
