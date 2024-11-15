import { configureStore, combineReducers } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';

const rootReducer = combineReducers({
  movie: movieReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
