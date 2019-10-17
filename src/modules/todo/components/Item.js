import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import styles from '../styles/item.module.scss';

const saveToDoImage = require('./../../../assets/baseline_save_black_18dp.png');
const deleteToDoImage = require('./../../../assets/baseline_delete_black_18dp.png');
const addToDoImage = require('./../../../assets/baseline_add_black_18dp.png');


const TodoItem = ({text,item,showAddButton}) => {

  
  

  const {onInputChange, saveTodoHandler,deleteTodoHandler, addTodoHandler} = useContext(RootContextProvider);
  
  

  return (
      <div className={styles.itemContainer}>  
        <input className= {styles.input} value={text} onChange={(e) => onInputChange(e,item.id)} onBlur={(e) => saveTodoHandler(item.id, text)}></input> 
        <div className={styles.imageContainer}>
          <img onClick={(e) => saveTodoHandler(item.id, text)} src={saveToDoImage} alt="Save your todo"></img>
          <img onClick={(e) => deleteTodoHandler(item.id)} src={deleteToDoImage} alt="Delete your todo"></img>
          {showAddButton ? <img src={addToDoImage} onClick={(e) => addTodoHandler(item.id)} alt="Add your todo"></img> : null}
        </div>  
      </div>
  )
}

export default TodoItem;