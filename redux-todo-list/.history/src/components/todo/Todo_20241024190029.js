import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, selectTodo } from '../../slice/todoSlice';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');

  const todoList = useSelector(selectTodo);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(ADD_TODO(e.target.value));
  };

  const addTask = () => {};

  return (
    <>
      <h2>Todo List App in Redux</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter Todo"
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: 'none',
            fontSize: 20,
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,

            fontSize: 15,
            marginLeft: 20,
          }}
        >
          Go
        </button>
      </form>
      {/* <ul className="allTodos">
        <li className="singleTodo">
          <span className="todoText">First Todo</span>
          <button
            style={{
              padding: 10,
              borderRadius: 25,
              border: '1px solid white',
              color: 'white',
              backgroundColor: 'orangered',
            }}
          >
            Delete
          </button>
        </li>
      </ul> */}
    </>
  );
};

export default Todo;
