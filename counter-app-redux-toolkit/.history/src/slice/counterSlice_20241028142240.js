import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    INCREMENET_BY_ONE: (state, action) => {},
    DECREMENT_BY_ONE: (state, action) => {},
    INCREMENT_BY_AN_AMOUNT: (state, action) => {},
  },
});
