import React, { useReducer } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import ItemForm from '../ItemForm/ItemForm';
import Styles from './GroceryList.css';

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
    default:
      throw new Error(`Action type ${action.type} is not supported.`);
  }
};

export default function GroceryList() {
  const [groceriesList, dispatch] = useReducer(
    groceriesListReducer,
    initialList
  );
  // const [groceriesList, setGroceriesList] = useState([
  //   { id: 1, item: 'veggie dogs', complete: false },
  //   { id: 2, item: 'bananas', complete: false },
  //   { id: 3, item: 'coffee', complete: false },
  // ]);

  function addListItem(item) {
    // setGroceriesList([...groceriesList, item]);
    dispatch({ type: 'ADD_ITEM', payload: item });
  }

  function deleteListItem(id) {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  }

  return (
    <>
      <ItemForm addListItem={addListItem} />
      <section className={Styles.itemList}>
        <ul>
          {groceriesList.map((item, i) => (
            <li key={`${item.id}${i}`}>
              <GroceryItem item={item} deleteListItem={deleteListItem} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
