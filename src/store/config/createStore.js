import {createStore} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducerRegistory from "../reducers/reducerRegistory";
export default createStore(reducerRegistory,devToolsEnhancer(
  // Specify custom devTools options
));