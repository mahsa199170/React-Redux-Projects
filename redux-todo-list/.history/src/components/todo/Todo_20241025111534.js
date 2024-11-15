import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, selectTodo } from '../../slice/todoSlice';
import { useState } from 'react';

const Todo = () => {
  const todolist = useSelector(selectTodo);
  const id = Math.floor(Math.random() * 100);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    dispatch(ADD_TASK({ name: inputValue, id }));
  };

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
        {todolist.map((to, index) => {
          const { name, id } = to;

          return (
            <li key={id} className="singleTodo">
              <span className="todoText">{name}</span>
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
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
