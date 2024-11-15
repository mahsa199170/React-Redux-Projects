import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countReducer from './slice/counterSlice';

const rootReducer = combineReducers({
  counter: countReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
