// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ADD_TODO, selectTodo } from '../../slice/todoSlice';

// const Todo = () => {
//   const todo = useSelector(selectTodo);
//   const dispatch = useDispatch();
//   const [showlist, setShowList] = useState(false);

//   const handleInput = (e) => {
//     e.preventDefault();
//     dispatch(ADD_TODO(e.target.value));
//   };

//   const addTodo = (e) => {
//     e.preventDefault();
//     console.log(todo);
//     setShowList(true);
//   };

//   return (
//     <>
//       <h2>Todo List App in Redux</h2>
//       {todo}
//       <form>
//         <input
//           type="text"
//           placeholder="Enter Todo"
//           style={{
//             width: 350,
//             padding: 10,
//             borderRadius: 20,
//             border: 'none',
//             fontSize: 20,
//           }}
//           value={todo}
//           onChange={handleInput}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: 12,
//             borderRadius: 25,

//             fontSize: 15,
//             marginLeft: 20,
//           }}
//           onClick={addTodo}
//         >
//           Go
//         </button>
//       </form>
//       {showlist && (
//         <ul className="allTodos">
//           {todo.map((t) => {
//             <li className="singleTodo">
//               <span className="todoText">{t}</span>

//               <button
//                 style={{
//                   padding: 10,
//                   borderRadius: 25,
//                   border: '1px solid white',
//                   color: 'white',
//                   backgroundColor: 'orangered',
//                 }}
//               >
//                 Delete
//               </button>
//             </li>;
//           })}
//         </ul>
//       )}
//     </>
//   );
// };

// export default Todo;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, selectTodo } from '../../slice/todoSlice';

const Todo = () => {
  const todoList = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [showList, setShowList] = useState(false);

  // Update local state for input
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // Add a new todo item
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(ADD_TODO(inputValue));
      setInputValue(''); // Clear the input field
      setShowList(true);
    }
  };

  return (
    <>
      <h2>Todo List App in Redux</h2>
      <form onSubmit={addTodo}>
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
        >
          Go
        </button>
      </form>
      {showList && (
        <ul className="allTodos">
          {todoList.map((todoItem, index) => (
            <li key={index} className="singleTodo">
              <span className="todoText">{todoItem}</span>
              <button
                style={{
                  padding: 10,
                  borderRadius: 25,
                  border: '1px solid white',
                  color: 'white',
                  backgroundColor: 'orangered',
                }}
                // Optional: Add delete functionality here
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Todo;
