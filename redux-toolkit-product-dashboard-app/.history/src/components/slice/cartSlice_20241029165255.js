import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cartList: [{ title: '', price: '', description: '', image: '' }],
  cartList: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cartList.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cartList.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
