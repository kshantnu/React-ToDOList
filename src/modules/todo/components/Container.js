import React,{useEffect, useState, useReducer} from 'react';
// import {useDispatch, useStore} from 'react-redux';
import {TodoHeader, TodoItem, TodoList} from "../components";
import {todoReducer} from "../../../store/reducers";
import useServiceHelper from "../../../common/useServiceHelper";
import styles from '../styles/container.module.scss';




export const RootContextProvider = React.createContext(null);

export const TodoContainer = (props) => {

  //IMP : not using react-redux for now, state is maintained centerally by using react hooks;
  // const dispatch = useDispatch();
  // const store = useStore();

  // TODO: Maintain a seperate class for initial state.. here reading it from todoReducer()
  const [state, dispatch] = useReducer(todoReducer, todoReducer());
  const [inputObject, updateText] = useState({id: null, text: ''});
  const data = useServiceHelper([]);

  const onInputChange = (e,key) => {
    updateText({id: key, text: e.target.value});
  }

  const saveTodoHandler = (id, changedText) => {
    // const localStorageTodos = JSON.parse(localStorage.getItem('todosList'));
    const {todos} = state;
    
    // Improve array manipulation to not mutate original array
    const updatedTodos = todos.map((item) => 
      item.id === id ? {...item, text: changedText} : item
    )
    
    dispatch({type : 'EDIT_TODO', payload: {todos: updatedTodos}});
    // update local storage after successful state change
    localStorage.setItem('todosList',JSON.stringify(updatedTodos));
  }

  const deleteTodoHandler = (id) => {
    const {todos} = state;
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
    const {todos} = state;
    console.log("todos state", todos);
    const newTodoObject = {id: id + 1, text: ''};
    todos.push(newTodoObject);
    dispatch({type : 'ADD_TODO', payload: {todos}});
    updateText({id: id + 1, value: ''});
    localStorage.setItem('todosList',JSON.stringify(todos));
  }
  
  // Intialize local storage to show atleast one placeholder for todo
  useEffect(() => {
    const {todos} = state;
    if(todos.length === 0) {
      todos.push({id: 1, text: ''});
      localStorage.setItem('todosList',JSON.stringify(todos));
    }
  },[]);
  
  useEffect(() => {
    dispatch({type : 'ADD_TODO', payload: data});
    // why is this executing on adding data as dependency ?? Need to investigate
  },[data.isDataLoaded, data.todos]);

  
  
  const renderToDoItem = () => {
  const {isDataLoaded, todos} = state;
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









    


    
