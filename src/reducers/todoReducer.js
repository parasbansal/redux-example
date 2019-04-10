import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, SELECTED_TODO } from '../actions/types';

const initialState = {
  todos: [],
  selectedTodo: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case SELECTED_TODO:
      return {
        ...state,
        selectedTodo: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      }
    case UPDATE_TODO:
      const updateTodoId = action.payload.todo.id;
      const todoIndex = state.todos.findIndex(todo => todo.id === updateTodoId)
      const updateNewTodos = state.todos;
      updateNewTodos[todoIndex] = action.payload
      return {
        ...state,
        todos: updateNewTodos
      }
    case DELETE_TODO:
      const deleteTodoId = action.payload.id;
      const deleteNewTodos = state.todos.filter(todo => todo.id !== deleteTodoId);
      return {
        ...state,
        todos: deleteNewTodos
      }
    default:
      return state;
  }
}