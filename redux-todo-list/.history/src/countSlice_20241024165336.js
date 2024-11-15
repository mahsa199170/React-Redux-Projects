import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    ADD_BY_ONE: (state, action) => {
      console.log(state);
      console.log(state.count);
      console.log(action);
    },
  },
});

export const selectCount = (state) => state.count.count;
export const { ADD_BY_ONE } = countSlice.actions;
export default countSlice.reducer;
