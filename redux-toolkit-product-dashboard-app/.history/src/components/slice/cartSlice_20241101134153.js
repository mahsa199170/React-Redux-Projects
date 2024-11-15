import { createSlice } from '@reduxjs/toolkit';
import { CardLink } from 'react-bootstrap';

const initialState = {
  //   cartList: [{ title: '', price: '', description: '', image: '' }],
  //   cartList: [],
  cartList: localStorage.getItem('cartList')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cartList.push(action.payload);

      localStorage.setItem('cardList', JSON.stringify(state.cartList));
    },
    REMOVE_FROM_CART: (state, action) => {
      const updatedList = state.cartList.filter(
        (cart) => cart.id !== action.payload
      );
      state.cartList = updatedList;
      localStorage.setItem('cardList', JSON.stringify(state.cartList));
    },
  },
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default cartSlice.reducer;
