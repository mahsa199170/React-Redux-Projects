import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todolist: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo.todolist;
export const { ADD_TASK } = todoSlice.actions;
export default todoSlice.reducer;
