import React,{useEffect, useState} from 'react';
import {useDispatch, useStore, useSelector} from 'react-redux';
import {TodoHeader, TodoItem, TodoList} from "../components";

import useServiceHelper from "../../../common/useServiceHelper";
import styles from '../styles/container.module.scss';




export const RootContextProvider = React.createContext(null);

export const TodoContainer = (props) => {
  const dispatch = useDispatch();
  const isDataLoaded = useSelector((state) => state.todoReducer.isDataLoaded);
  const todos = useSelector((state) => state.todoReducer.todos);
  const store = useStore();

  const [inputObject, updateText] = useState({id: null, text: ''});

  const data = useServiceHelper([]);
  useEffect(() => {
    dispatch({type : 'ADD_TODO', payload: data});
  },[data.isDataLoaded, data.todos]);

  const onInputChange = (e,key) => {
    updateText({id: key, text: e.target.value});
  }

  const saveTodoHandler = (id, changedText) => {
    // const localStorageTodos = JSON.parse(localStorage.getItem('todosList'));
    // const {todos} = state;
    
    // Improve array manipulation to not mutate original array
    const updatedTodos = todos.map((item) => 
      item.id === id ? {...item, text: changedText} : item
    )
    
    dispatch({type : 'EDIT_TODO', payload: {todos: updatedTodos}});
    // update local storage after successful state change
    localStorage.setItem('todosList',JSON.stringify(updatedTodos));
  }

  const deleteTodoHandler = (id) => {
    // const {todos} = state;
    const updatedTodos = todos.filter(item => item.id !== id);
    // data.todos = updatedTodos;
    dispatch({type : 'EDIT_TODO', payload: {todos: updatedTodos}});
    // update local storage after successful state change
    localStorage.setItem('todosList',JSON.stringify(updatedTodos));

    // if todos is empty , prefilling it with empty item: to show blank todo on page
    if(todos.length === 1) {
      updateText({id: 1, text: ''}); // Clear the text of input
    }
  }

  const addTodoHandler = (id) => {
    // const {todos} = state;
    console.log("todos state", todos);
    const newTodoObject = {id: id + 1, text: ''};
    todos.push(newTodoObject);
    dispatch({type : 'ADD_TODO', payload: {todos}});
    updateText({id: id + 1, value: ''});
    localStorage.setItem('todosList',JSON.stringify(todos));
  }
  
  // Intialize local storage to show atleast one placeholder for todo
  useEffect(() => {
    const locallyStoredTodos = JSON.parse(localStorage.getItem('todosList'))
    if(!locallyStoredTodos || locallyStoredTodos.length === 0) {
      const locallyStoredTodos = [];
      locallyStoredTodos.push({id: 1, text: ''});
      localStorage.setItem('todosList',JSON.stringify(locallyStoredTodos));
    }
  },[]);
  
  

  
  
  const renderToDoItem = () => {
  // const {isDataLoaded, todos} = state;
   let content = null;
   if(isDataLoaded) {
     if(todos && Array.isArray(todos)) {
       if(todos.length === 0) {
         content = <TodoItem item = {todos}/>
       } else {
         content = <TodoList itemList = {todos}/>
       }
     }
   }
   return content;
  }
  
  return (
    <RootContextProvider.Provider value = {{dispatch,onInputChange,inputObject,saveTodoHandler,deleteTodoHandler, addTodoHandler}}>         
          <div className={styles.container}>
            <TodoHeader/>           
            <div className={styles.listContainer}>{renderToDoItem()}</div>
          </div>
    </RootContextProvider.Provider>
    
  )

}









    


    
