import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const cartSelector = (state) => state.cart.cartList;

export default cartSlice.reducer;
