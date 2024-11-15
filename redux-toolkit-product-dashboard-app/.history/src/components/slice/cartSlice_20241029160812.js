import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [{ title: '', price: '' }],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const cartSelector = (state) => state.cart.cartList;

export default cartSlice.reducer;
