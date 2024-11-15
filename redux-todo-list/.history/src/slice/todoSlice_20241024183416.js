import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      state.todo = state.todo.push(action.payload);
    },
  },
});

export const { ADD_TODO } = todoSlice.actions;
export const selectTodo = (state) => state.todo.todo;
export default todoSlice.reducer;
