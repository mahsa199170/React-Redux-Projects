import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

const selectCount = (state) => state.counter.count;

export default countSlice.reducer;
