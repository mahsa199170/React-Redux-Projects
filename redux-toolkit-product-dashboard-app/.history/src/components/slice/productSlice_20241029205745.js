// lets see how we can make api call , with the help of middleware in redux toolkit

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = productSlice.actions;
export const dataSelector = (state) => state.products.data;
export const isLoadingSelector = (state) => state.products.isLoading;
export const errorSelector = (state) => state.products.error;

export default productSlice.reducer;

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch('https://fakestoreapi.com/products');
//     const result = data.json();
//     dispatch(fetchProducts(result));
//   };
// }

export const fetchProduct = createAsyncThunk('products/get', async () => {
  const res = await axios('https://fakestoreapi.com/product');
  const data = await res.data;
  return data;
});
