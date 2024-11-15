import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './components/slice/cartSlice';
import productSlice from './components/slice/productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
