const TodoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD-TODO':
      return { todos: action.payload };

    case 'REMOVE-TODO':
      return { todos: action.payload };
  }
};
