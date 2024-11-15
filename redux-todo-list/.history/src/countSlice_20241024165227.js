import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    ADD_BY_ONE: (state, action) => {
      const count = state.count + 1;
      return count;
    },
  },
});

export const selectCount = (state) => state.count.count;
export const { ADD_BY_ONE } = countSlice.actions;
export default countSlice.reducer;
