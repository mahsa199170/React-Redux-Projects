import { createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../common/apis/movieApiKey';

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

export const fetchMovies =
  ('movies/get',
  async () => {
    const res = await axios('');
    const data = await res.data;
  });
