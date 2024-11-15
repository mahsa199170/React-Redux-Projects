import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../common/apis/movieApiKey';
import movieApi from '../common/apis/movieApi';
import { act } from 'react';

const initialState = {
  movies: [],
  shows: [],
  movieOrShow: [],
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
      state.shows = action.payload;
    });
    builder.addCase(fetchShowOrMovieDetails.fulfilled, (state, action) => {
      console.log('successfully');
      state.isLoading = false;
      state.movieOrShow = action.payload;
      console.log(movieOrShow);
    });
  },
});

export const movieSelector = (state) => state.movies.movies;
export const showSelector = (state) => state.movies.shows;
export const showOrMovieSelector = (state) => state.movies.movieOrShow;

export default movieSlice.reducer;

//fetching movies form api
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await movieApi.get(`?apikey=${apiKey}&s=Harry&type=movie`);
  return res.data;
});

//fetching shows from api
export const fetchShows = createAsyncThunk('movies/fetchShows', async () => {
  const res = await movieApi.get(`?apikey=${apiKey}&s=Friends&type=series`);
  return res.data;
});

//fetching shows or movies details from api
export const fetchShowOrMovieDetails = createAsyncThunk(
  'movies/fetchShowOrMovieDetails ',
  async (id) => {
    const res = await movieApi.get(`?apikey=${apiKey}&i=${id} &Plot=full`);
    return res.data;
  }
);
