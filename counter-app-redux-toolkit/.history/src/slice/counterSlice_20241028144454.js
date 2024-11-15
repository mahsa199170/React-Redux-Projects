import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    INCREMENET_BY_ONE: (state, action) => {
      state.count += 1;
      console.log(typeof state.count);
    },
    DECREMENT_BY_ONE: (state, action) => {
      state.count -= 1;
    },
    INCREMENT_BY_AN_AMOUNT: (state, action) => {
      console.log(typeof action.payload);
      state.count += action.payload;
    },
    RESET_AMOUNT: (state, action) => {},
  },
});

export const countSelector = (state) => state.counter.count;
export const {
  INCREMENET_BY_ONE,
  DECREMENT_BY_ONE,
  INCREMENT_BY_AN_AMOUNT,
  RESET_AMOUNT,
} = counterSlice.actions;

export default counterSlice.reducer;
