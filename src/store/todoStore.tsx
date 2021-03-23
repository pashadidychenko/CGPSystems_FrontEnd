const todoInitialState = {
  todo: [],
};

const todoActions = {
  addTodo: (state) => ({ todo: [state] }),
};

export { todoInitialState, todoActions };
