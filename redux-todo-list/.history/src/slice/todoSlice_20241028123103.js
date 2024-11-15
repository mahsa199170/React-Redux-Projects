import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todoList: [],
};
console.log(state.todoList);

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      state.todoList.push(action.payload);
    },
    REMOVE_TASK: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { ADD_TASK, REMOVE_TASK } = todoSlice.actions;

export const todoSelector = (state) => state.todo.todoList;

export default todoSlice.reducer;
