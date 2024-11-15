import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todolist: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      state.todolist.push(action.payload);
    },
    DELETE_TASK: (state, action) => {
      console.log('az inja', action.payload);
      //   state.todolist.filter((t, i) => i !== action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo.todolist;
export const { ADD_TASK, DELETE_TASK } = todoSlice.actions;
export default todoSlice.reducer;
