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
  reducers: {
    REMOVE_SELECTED_MOVIE_OR_SHOW: (state) => {
      state.movieOrShow = {};
    },
  },
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
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shows = action.payload;
    });
    builder.addCase(fetchShowOrMovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieOrShow = action.payload;
    });
  },
});

export const { REMOVE_SELECTED_MOVIE_OR_SHOW } = movieSlice.actions;
export const movieSelector = (state) => state.movies.movies;
export const showSelector = (state) => state.movies.shows;
export const showOrMovieSelector = (state) => state.movies.movieOrShow;
export const isloadingSelector = (state) => state.movies.movieOrShow;

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
