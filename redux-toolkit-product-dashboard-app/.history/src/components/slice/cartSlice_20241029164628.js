import { createSlice } from '@reduxjs/toolkit';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  },
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
