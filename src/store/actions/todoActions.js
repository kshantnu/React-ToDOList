
import {ADD_TODO, EDIT_TODO, DELETE_TODO, FETCH_TODO, SEARCH_TODO, FILTER_TODO} from "./types";


let nextTodoId = 0;

export const addTodo = (content) => {
  console.log("inside actions");
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content
    }
  }
}

export const editTodo = (content) => {
  return {
    type: EDIT_TODO,
    payload: content
  }
}

export const deleteTodo = (contentID) => {
  return {
    type: DELETE_TODO,
    payload: contentID
  }
}

export const fetchTodo = () => {
  return {
    type: FETCH_TODO
  }
}

export const searchTodo = (contentID) => {
  return {
    type: SEARCH_TODO,
    payload: contentID
  }
}

export const filterTodo = (content) => {
  return {
    type: FILTER_TODO,
    payload: content
  }
}

