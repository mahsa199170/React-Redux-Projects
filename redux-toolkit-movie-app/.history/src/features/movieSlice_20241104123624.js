import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
});

export const {} = movieSlice.actions;
export const movieSelector = (state) => state.movie.movies;
export default movieSlice.reducer;
