import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import {TodoItem} from "../components";



const TodoList = (props) => {
  const {inputObject} = useContext(RootContextProvider);
  
  const {itemList} = props;
  
  return (
    <div>
       {itemList.map((item, index) => 
          <TodoItem key={item.id} item={item} text={item.id === inputObject.id ? inputObject.text : item.text} 
          showAddButton = {itemList.length === index + 1 ? true : false}/>
       )}
    </div>

  )

}

export default TodoList;