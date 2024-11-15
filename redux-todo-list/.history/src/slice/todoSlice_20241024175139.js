import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [1],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const selectTodo = (state) => state.todo.todo;
export default todoSlice.reducer;
