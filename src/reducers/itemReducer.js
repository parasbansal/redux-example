import { FETCH_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECTED_ITEM } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    // case SELECTED_ITEM:
    //   return {
    //     ...state,
    //     selectedItem: action.payload
    //   }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    // case UPDATE_ITEM:
    //   const updateItemId = action.payload.item.id;
    //   const itemIndex = state.items.findIndex(item => item.id === updateItemId)
    //   const updateNewItems = state.items;
    //   updateNewItems[itemIndex] = action.payload
    //   return {
    //     ...state,
    //     items: updateNewItems
    //   }
    // case DELETE_ITEM:
    //   const deleteItemId = action.payload.id;
    //   const deleteNewItems = state.items.filter(item => item.id !== deleteItemId);
    //   return {
    //     ...state,
    //     items: deleteNewItems
    //   }
    default:
      return state;
  }
}