import React,{useEffect, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {TodoHeader, TodoItem, TodoList} from "../components";
import useServiceHelper from "../../../common/useServiceHelper";
import styles from '../styles/container.module.scss';



export const RootContextProvider = React.createContext(null);

export const TodoContainer = (props) => {
  const dispatch = useDispatch();
  const store = useStore();
  const [inputObject, updateText] = useState({id: null, value: ''})
  const data = useServiceHelper(dispatch,[]);
  const {isDataLoaded,todos} = data;
  
  const onInputChange = (e,key) => {
    updateText({id: key, value: e.target.value});
  }

  const saveTodoHandler = (id, changedText) => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todosList'));
    // Improve array manipulation to not mutate original array
    const duplicateArray = localStorageTodos.map((item) => 
      item.id === id ? {...item, text: changedText} : item
    )
    localStorage.setItem('todosList',JSON.stringify(duplicateArray));
    data.todos = duplicateArray;
    dispatch({type : 'SAVE_TODO', payload: data});
  }
   
  useEffect(() => {
    dispatch({type : 'ADD_TODO', payload: data});
    // why is this executing on adding data as dependency ?? Need to investigate
  },[isDataLoaded, todos]);
  
  const renderToDoItem = () => {
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
    <RootContextProvider.Provider value = {{dispatch,onInputChange,inputObject,saveTodoHandler}}>         
          <div className={styles.container}>
            <TodoHeader/>           
            <div className={styles.listContainer}>{renderToDoItem()}</div>
          </div>
    </RootContextProvider.Provider>
    
  )

}









    


    
