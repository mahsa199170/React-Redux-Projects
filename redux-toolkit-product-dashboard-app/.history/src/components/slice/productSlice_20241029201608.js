// lets see how we can make api call with redux toolkit

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;

export function getProducts() {}