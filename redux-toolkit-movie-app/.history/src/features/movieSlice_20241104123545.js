import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movie: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
