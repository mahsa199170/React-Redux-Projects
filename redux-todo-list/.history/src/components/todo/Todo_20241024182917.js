import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, selectTodo } from '../../slice/todoSlice';

const Todo = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(ADD_TODO(e.target.value));
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <>
      <h2>Todo List App in Redux</h2>
      {todo}
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
          value={todo}
          onChange={handleInput}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,

            fontSize: 15,
            marginLeft: 20,
          }}
          onClick={addTodo}
        >
          Go
        </button>
      </form>
      <ul className="allTodos">
        <li className="singleTodo">
          <span className="todoText">{todo}</span>
          {todo}
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
