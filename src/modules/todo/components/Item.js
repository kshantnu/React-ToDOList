import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import styles from '../styles/item.module.scss';
const saveToDoImage = require('./../../../assets/baseline_save_black_18dp.png');
const deleteToDoImage = require('./../../../assets/delete-24px.svg');


const TodoItem = (props) => {

  const saveTodo = () => {
    console.log("items saved", );
  }

  const context = useContext(RootContextProvider);
  console.log("voila", context);


  return (
      <div className={styles.itemContainer}>  
        <input className= {styles.input} value={context[2]} onChange={(e) => context[1](e,props.item.id)}></input> 
        <div className={styles.imageContainer}>
          <img onClick={saveTodo} src={saveToDoImage} alt="Save your todo"></img>
          <embed src={deleteToDoImage} alt="Delete your todo"></embed> 
        </div>  
      </div>
  )
}

export default TodoItem;