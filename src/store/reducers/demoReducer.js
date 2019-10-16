

const initialState = {
  demo : []
};



const demoReducer = (state, action) => {
  return state || initialState;
  // console.log("reducer state", state);
  // const nextState = state || initialState;
  // const { type } = action;
  // switch (type) {
  //   case GET_TODO :
  //     return getTodos(nextState,action);
  //   case ADD_TODO:
  //     return addTodo(nextState, action);
  //   case EDIT_TODO:
  //     return editTodo(nextState, action);
  //   case DELETE_TODO:
  //     return deleteTodo(nextState, action);
  //   case SEARCH_TODO:
  //     return searchTodo(nextState, action);
  //   case FILTER_TODO:
  //     return filterTodo(nextState, action);
  //   default:
  //     return nextState;
  // }
};

export default demoReducer;