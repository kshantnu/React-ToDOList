import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import styles from '../styles/item.module.scss';

const saveToDoImage = require('./../../../assets/baseline_save_black_18dp.png');
const deleteToDoImage = require('./../../../assets/baseline_delete_black_18dp.png');
const addToDoImage = require('./../../../assets/baseline_add_black_18dp.png');


const TodoItem = ({value,item,showAddButton}) => {

  console.log("items saved", value);
  

  const {onInputChange, saveTodoHandler} = useContext(RootContextProvider);
  
  

  return (
      <div className={styles.itemContainer}>  
        <input className= {styles.input} value={value} onChange={(e) => onInputChange(e,item.id)} onBlur={(e) => saveTodoHandler(item.id, value)}></input> 
        <div className={styles.imageContainer}>
          <img onClick={(e) => saveTodoHandler(item.id, value)} src={saveToDoImage} alt="Save your todo"></img>
          <img src={deleteToDoImage} alt="Delete your todo"></img>
          {showAddButton ? <img src={addToDoImage} alt="Add your todo"></img> : null}
        </div>  
      </div>
  )
}

export default TodoItem;