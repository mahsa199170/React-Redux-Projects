import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../../slice/todoSlice';

const Todo = () => {
  const todo = useSelector;

  return (
    <>
      <h2>Todo List App in Redux</h2>
      <h1></h1>
      <form>
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
      <ul className="allTodos">
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
      </ul>
    </>
  );
};

export default Todo;