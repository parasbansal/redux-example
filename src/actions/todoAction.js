import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, SELECTED_TODO } from '../actions/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const fetchTodos = () => dispatch => {
  fetch(BASE_URL + 'todos')
    .then(res => res.json())
    .then(todos => 
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      })
    );
}
export const fetchTodo = (id) => dispatch => {
  fetch(BASE_URL + 'todo/' + id)
    .then(res => res.json())
    .then(todo => 
      dispatch({
        type: SELECTED_TODO,
        payload: todo
      })
    );
}
export const addTodo = (newTodo) => dispatch => {
  fetch(BASE_URL + 'todo', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
    .then(res => res.json())
    .then(todo => 
      dispatch({
        type: ADD_TODO,
        payload: todo
      })
    );
}
export const updateTodo = (id, newTodo) => dispatch => {
  fetch(BASE_URL + 'todo/' + id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
    .then(res => res.json())
    .then(todo => 
      dispatch({
        type: UPDATE_TODO,
        payload: todo
      })
    );
}
export const deleteTodo = (id) => dispatch => {
  fetch(BASE_URL + 'todo/' + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(todo => 
      dispatch({
        type: DELETE_TODO,
        payload: {todo, id}
      })
    );
}