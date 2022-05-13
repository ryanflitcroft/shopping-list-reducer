import React, { useState } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import ItemForm from '../ItemForm/ItemForm';
import Styles from './GroceryList.css';

export default function GroceryList() {
  const [groceriesList, setGroceriesList] = useState([
    { id: 1, item: 'veggie dogs', complete: false },
    { id: 2, item: 'bananas', complete: false },
    { id: 3, item: 'coffee', complete: false },
  ]);

  function addListItem(item) {
    setGroceriesList([...groceriesList, item]);
  }

  return (
    <>
      <ItemForm addListItem={addListItem} />
      <section className={Styles.itemList}>
        <ul>
          {groceriesList.map((item, i) => (
            <li key={`${item.id}${i}`}>
              <GroceryItem item={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
