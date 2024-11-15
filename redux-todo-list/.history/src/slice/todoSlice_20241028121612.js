import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todoList: [1],
};

const todoSlice = createSlice({
  name: 'tood',
  initialState,
  reducer: {
    ADD_TASK: (state, action) => {
      console.log(action.payload);
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
