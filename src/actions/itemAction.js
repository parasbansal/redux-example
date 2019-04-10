import { FETCH_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECTED_ITEM } from '../actions/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const fetchItems = () => dispatch => {
  fetch(BASE_URL + 'posts')
    .then(res => res.json())
    .then(items => 
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      })
    );
}
export const fetchItem = (id) => dispatch => {
  fetch(BASE_URL + 'item/' + id)
    .then(res => res.json())
    .then(item => 
      dispatch({
        type: SELECTED_ITEM,
        payload: item
      })
    );
}
export const addItem = (newItem) => dispatch => {
  fetch(BASE_URL + 'item', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
    .then(res => res.json())
    .then(item => 
      dispatch({
        type: ADD_ITEM,
        payload: item
      })
    );
}
export const updateItem = (id, newItem) => dispatch => {
  fetch(BASE_URL + 'item/' + id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
    .then(res => res.json())
    .then(item => 
      dispatch({
        type: UPDATE_ITEM,
        payload: item
      })
    );
}
export const deleteItem = (id) => dispatch => {
  fetch(BASE_URL + 'item/' + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(item => 
      dispatch({
        type: DELETE_ITEM,
        payload: {item, id}
      })
    );
}