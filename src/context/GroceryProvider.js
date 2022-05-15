import { createContext, useReducer } from 'react';

export const GroceryContext = createContext();

const initialList = [
  { id: 1, item: 'coffee', complete: false },
  { id: 2, item: 'bananas', complete: false },
  { id: 3, item: 'tofu', complete: false },
  { id: 4, item: 'oat milk', complete: false },
  { id: 5, item: 'space coke', complete: false },
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
    case 'DELETE_ALL':
      return [];
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

  function updateListItem(item) {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  }

  function deleteListItem(id) {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  }

  function deleteAllListItems() {
    dispatch({ type: 'DELETE_ALL' });
  }

  const getAverageComplete = () => {
    return Math.floor(
      (groceriesList.filter((item) => item.complete).length /
        groceriesList.length) *
        100
    );
  };

  const groceryStateAndActions = {
    groceriesList,
    addListItem,
    updateListItem,
    deleteListItem,
    deleteAllListItems,
    getAverageComplete,
  };

  return (
    <GroceryContext.Provider value={groceryStateAndActions}>
      {children}
    </GroceryContext.Provider>
  );
}
