import React,{useEffect, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {TodoHeader, TodoItem, TodoList} from "../components";
// import RootContextProvider from '../../../context/rootContext';
import useServiceHelper from "../../../common/useServiceHelper";
import styles from '../styles/container.module.scss';



export const RootContextProvider = React.createContext(null);

export const TodoContainer = (props) => {
  
 
  // const state = useSelector((state) => state);
  //  let color;

  //  const generateNewColor = () => {
  //    color =  
  //     "rgba(" +
  //     Math.random() * 255 +
  //     "," +
  //     Math.random() * 255 +
  //     "," +
  //     Math.random() * 255 +
  //     ",1)";
  //     return color;
  // }
  // generateNewColor();
  
  const dispatch = useDispatch();
  const store = useStore();

  const [inputObject, updateText] = useState({id: null, value: ''})
  
    
 
  const data = useServiceHelper([]);
  const {isDataLoaded,todos} = data;
  
  
  

  const onInputChange = (e,key) => {
    updateText({id: key, value: e.target.value});
   // todos[key-1].text = e.target.value;
   // dispatch({type : 'ADD_TODO', payload: data});
   // updateTodos(todos);
  }
   
  console.log("current store", store);
  
  useEffect(() => {
    
    dispatch({type : 'ADD_TODO', payload: data});
  },[isDataLoaded, todos, data, dispatch]);
  
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
    <RootContextProvider.Provider value = {{dispatch,onInputChange,inputObject}}>         
          <div className={styles.container}>
            {/* <div style={{backgroundColor: color}}>sdkfnvkdsv</div> */}
            <TodoHeader/>
            
            <div className={styles.listContainer}>{renderToDoItem()}</div>
          </div>
    </RootContextProvider.Provider>
    
  )

}









    


    
