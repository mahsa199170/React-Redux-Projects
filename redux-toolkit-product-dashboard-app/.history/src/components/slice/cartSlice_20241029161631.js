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
      alert(action.payload);
    },
  },
});

export const cartSelector = (state) => state.cart.cartList;

export const { ADD_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
