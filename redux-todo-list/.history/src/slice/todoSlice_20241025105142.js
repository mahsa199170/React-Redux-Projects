import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todolist: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const selectTodo = (state) => state.todo.todolist;
export default todoSlice.reducer;