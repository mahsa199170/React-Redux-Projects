import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      state.todo.push(action.payload);
    },
    DELETE_TASK: (state, action) => {
      const updatedTodolist = state.todo.filter(
        (to, i) => i !== action.payload
      );
      state.todo = updatedTodolist;
      console.log(action.payload);
    },
  },
});

export const { ADD_TODO, DELETE_TASK } = todoSlice.actions;
export const selectTodo = (state) => state.todo.todo;
export default todoSlice.reducer;
