import React from 'react';
import {TodoItem} from "../components";



const TodoList = (props) => {
  const {itemList} = props;
  
  return (
    <div>
       {itemList.map((item) => 
          <TodoItem key={item.id} item={item}/>
       )}
    </div>

  )

}

export default TodoList;