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
      const updatedTodolist = todoList.filter((to, i) => i !== index);
    },
  },
});

export const { ADD_TODO } = todoSlice.actions;
export const selectTodo = (state) => state.todo.todo;
export default todoSlice.reducer;
