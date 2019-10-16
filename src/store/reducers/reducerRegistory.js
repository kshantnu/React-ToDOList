import { combineReducers } from "redux";
import todoReducer from './todoReducer';
import demoReducer from "./demoReducer.js";

export default combineReducers({ todoReducer,demoReducer });