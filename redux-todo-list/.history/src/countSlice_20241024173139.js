import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export default countSlice.reducer;
