import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cartList: [{ title: '', price: '', description: '', image: '' }],
  cartList: [],
};
const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.cartList.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      const updatedList = state.cartList.filter(
        (cart) => cart.id !== action.payload
      );
      state.cartList = updatedList;
    },
  },
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions;

export default productSlice.reducer;