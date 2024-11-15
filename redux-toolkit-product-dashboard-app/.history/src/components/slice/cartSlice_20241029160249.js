import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: ['luna', 'ellie'],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const cartSelector = (state) => state.cart.cartList;

export default cartSlice.reducer;
