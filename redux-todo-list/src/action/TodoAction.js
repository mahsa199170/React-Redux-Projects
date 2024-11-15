export const AddTodoAction = (todo) => (dispatchEvent, getState) => {
  const {
    Todo: { todos },
  } = getState();

  const hasTodo = todos.find((i) => i.todo === todo);
};
