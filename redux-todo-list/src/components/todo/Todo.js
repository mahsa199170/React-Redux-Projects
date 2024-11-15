import { useDispatch, useSelector } from 'react-redux';
import { ADD_TASK, REMOVE_TASK, todoSelector } from '../../slice/todoSlice';
import { useEffect, useState } from 'react';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');

  const id = Math.floor(Math.random() * 100);

  const dispatch = useDispatch();

  const todoList = useSelector(todoSelector);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      alert('please enter a value');
    } else {
      dispatch(ADD_TASK({ name: inputValue, id: id }));
    }

    setInputValue('');
  };

  const handleRemove = (id) => {
    dispatch(REMOVE_TASK(id));
  };
  return (
    <>
      <h2>Todo List App in Redux</h2>

      <form onSubmit={handleSubmit}>
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
        {todoList.map((to) => {
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
                onClick={() => handleRemove(id)}
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
