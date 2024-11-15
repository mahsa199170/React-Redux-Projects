import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 5,
};

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    ADD_BY_ONE: (state, action) => {
      console.log(state);
    },
  },
});

export const selectCount = (state) => state.count.count;
export default countSlice.reducer;
