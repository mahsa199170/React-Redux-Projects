import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducer: {
    ADD_TASK: (state, action) => {
      console.log(action.payload);
    },
    REMOVE_TASK: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default todoSlice.reducer;
