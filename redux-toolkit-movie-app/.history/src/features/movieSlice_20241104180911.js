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
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const movieSelector = (state) => state.movies.movies;

export default movieSlice.reducer;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await movieApi.get(`?apikey=${apiKey}&s=Harry&type=movie`);
  return res.data;
});
