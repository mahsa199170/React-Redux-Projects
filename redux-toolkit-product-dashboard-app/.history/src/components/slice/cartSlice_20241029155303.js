import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};
const cartSlice = cartSlice({
  name: 'cart',
  initialState,
  reducers: {},
});
