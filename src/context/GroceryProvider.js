import { useContext, useReducer } from 'react';

export const GroceryContext = useContext();

const initialList = [
  { id: 1, item: 'veggies', complete: false },
  { id: 2, item: 'bananas', complete: false },
  { id: 3, item: 'coffee', complete: false },
];

const groceriesListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_ITEM':
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          return {
            ...item,
            item: action.payload.item.item,
            complete: action.payload.item.complete,
          };
        }
        return item;
      });
    default:
      throw new Error(`Action type ${action.type} is not supported.`);
  }
};

export default function GroceryProvider({ children }) {
  const [groceriesList, dispatch] = useReducer(
    groceriesListReducer,
    initialList
  );

  function addListItem(item) {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }

  function deleteListItem(id) {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  }

  function updateListItem(item) {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  }

  const groceryStateAndActions = {
    groceriesList,
    addListItem,
    deleteListItem,
    updateListItem,
  };

  return (
    <GroceryContext.Provider value={groceryStateAndActions}>
      {children}
    </GroceryContext.Provider>
  );
}
