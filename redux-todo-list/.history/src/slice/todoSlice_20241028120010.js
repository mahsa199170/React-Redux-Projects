import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducer: {
    ADD_NUMBER: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default todoSlice.reducer;
