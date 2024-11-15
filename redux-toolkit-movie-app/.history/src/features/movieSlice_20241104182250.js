import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../common/apis/movieApiKey';
import movieApi from '../common/apis/movieApi';

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      console.log('pending');
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      console.log('successfully');
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log('rejected');
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      console.log('successfully');
      state.isLoading = false;
      state.movies = action.payload;
    });
  },
});

export const movieSelector = (state) => state.movies.movies;

export default movieSlice.reducer;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await movieApi.get(`?apikey=${apiKey}&s=Harry&type=movie`);
  return res.data;
});

export const fetchShows = createAsyncThunk('movies/fetchShows', async () => {
  const res = await movieApi.get(`?apikey=${apiKey}&s=Harry&type=series`);
  return res.data;
});
