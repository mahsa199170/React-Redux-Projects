import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [1, 2, 3],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      console.log('from slice', action.payload);
    },
  },
});

export const { ADD_TODO } = todoSlice.actions;
export const selectTodo = (state) => state.todo.todo;
export default todoSlice.reducer;
