import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import {TodoItem} from "../components";



const TodoList = (props) => {
  const {inputObject} = useContext(RootContextProvider);
  const {itemList} = props;
  
  return (
    <div>
       {itemList.map((item) => 
          <TodoItem key={item.id} item={item} value={item.id === inputObject.id ? inputObject.text : item.text}/>
       )}
    </div>

  )

}

export default TodoList;