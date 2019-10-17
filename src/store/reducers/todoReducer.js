import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  SEARCH_TODO,
  FILTER_TODO,
  FETCH_TODO,

} from '../actions';

const initialState = {
  todos: [],
  isDataLoaded: false
};

const addTodo = (nextState, action) => {
  return {
    ...nextState,
    ...action.payload
  }
};
const fetchTodos = (nextState,action) => {
  return {
    ...nextState,
    ...action.payload
  }
};
const editTodo = (nextState,action) => {
  const {payload: {todos}} = action;

  if(todos && todos.length === 0) {
    const obj = {id: 1, text: ''};
    todos.push(obj);
    localStorage.setItem('todosList',JSON.stringify(todos));
  }

   return  {
    ...nextState,
    ...action.payload
  }
  

};
const deleteTodo = () => {};

const searchTodo = () => {};
const filterTodo = () => {};

const todoReducer = (state, action = {type: 'default'}) => {
  const nextState = state || initialState;
  const { type } = action;
  switch (type) {
    case FETCH_TODO :
      return fetchTodos(nextState,action);
    case ADD_TODO:
      return addTodo(nextState, action);
    case EDIT_TODO:
      return editTodo(nextState, action);
    case DELETE_TODO:
      return deleteTodo(nextState, action);
    case SEARCH_TODO:
      return searchTodo(nextState, action);
    case FILTER_TODO:
      return filterTodo(nextState, action);
    default:
      return nextState;
  }
};

export default todoReducer;
