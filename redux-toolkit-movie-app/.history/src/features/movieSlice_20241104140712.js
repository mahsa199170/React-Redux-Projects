import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../common/apis/movieApiKey';
import apiInstance from '../common/apis/movieApi';

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = movieSlice.actions;
export const movieSelector = (state) => state.movie.movies;
export default movieSlice.reducer;

export const fetchMovies = createAsyncThunk('movies/get', async () => {
  const res = await apiInstance.get('', {
    params: {
      apiKey: apiKey,
    },
  });
  return res.data;
});
