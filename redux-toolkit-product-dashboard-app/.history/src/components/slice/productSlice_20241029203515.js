// lets see how we can make api call , with the help of middleware in redux toolkit

import { createSlice } from '@reduxjs/toolkit';

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
      state.contents = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch('https://fakestoreapi.com/products');
//     const result = data.json();
//     dispatch(fetchProducts(result));
//   };
// }

export const fetchProduct = createAsyncThunk('products/get', async () => {
  const res = await axios('https://fakestoreapi.com/products');
  const data = await res.data;
  return data;
});
