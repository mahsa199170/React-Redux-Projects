import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducer: {
    ADD_TASK: (state, action) => {
      console.log(action.payload);
    },
    REMOVE_TASK: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { ADD_TASK, REMOVE_TASK } = todoSlice.actions;

export const todoSelector = (state) => state.todo.todo;
export default todoSlice.reducer;
