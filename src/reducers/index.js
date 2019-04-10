import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  items: itemReducer,
  todos: todoReducer
})