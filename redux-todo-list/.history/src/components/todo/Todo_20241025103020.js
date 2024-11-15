import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TASK, selectTodo } from '../../slice/todoSlice';

const Todo = () => {
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

      <ul className="allTodos">
        {todoList.map((todo) => {
          const { id, name } = todo;
          return (
            <li className="singleTodo" key={id}>
              <span className="todoText">{name}</span>
              <button
                style={{
                  padding: 10,
                  borderRadius: 25,
                  border: '1px solid white',
                  color: 'white',
                  backgroundColor: 'orangered',
                }}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
