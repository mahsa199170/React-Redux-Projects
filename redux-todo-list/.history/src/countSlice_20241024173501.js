import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.count.count;

export default countSlice.reducer;
