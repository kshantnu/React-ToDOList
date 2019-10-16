import React,{useContext} from 'react';
import {RootContextProvider} from '../components';
import styles from '../styles/item.module.scss';

const saveToDoImage = require('./../../../assets/baseline_save_black_18dp.png');
const deleteToDoImage = require('./../../../assets/delete-24px.svg');


const TodoItem = ({value,item}) => {
  // console.log("props-----", props);

  const saveTodo = () => {
    console.log("items saved", );
  }

  const {onInputChange,inputObject} = useContext(RootContextProvider);
 // console.log("voila", context);

  console.log("truth condition", item.id === inputObject.id);

  return (
      <div className={styles.itemContainer}>  
        <input className= {styles.input} value={value} onChange={(e) => onInputChange(e,item.id)}></input> 
        <div className={styles.imageContainer}>
          <img onClick={saveTodo} src={saveToDoImage} alt="Save your todo"></img>
          <embed src={deleteToDoImage} alt="Delete your todo"></embed> 
        </div>  
      </div>
  )
}

export default TodoItem;