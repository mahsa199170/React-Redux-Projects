import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default productSlice.reducer;
