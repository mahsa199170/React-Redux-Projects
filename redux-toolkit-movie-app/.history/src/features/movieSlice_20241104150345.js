import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiKey } from '../common/apis/movieApiKey';
import apiInstance from '../common/apis/movieApi';

const initialState = {
  movies: [],
  //   isLoading: false,
  //   error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchMovies.pending, (state) => {
  //       state.isLoading = true;
  //     });
  //     builder.addCase(fetchMovies.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       console.log('i am here', action.payload);
  //       state.data = action.payload;
  //       console.log('i am data', state.data);
  //     });
  //     builder.addCase(fetchMovies.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.error.message;
  //     });
  //   },
});

export const {} = movieSlice.actions;
export const dataSelector = (state) => state.movies.data;
export default movieSlice.reducer;

// export const fetchMovies = createAsyncThunk('movies/get', async () => {
//   const res = await apiInstance.get(`?apikey=${apiKey}&s=Harry&type=movie`);
//   return res.data;
// });
