import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducer: {},
});

export default todoSlice.reducer;
