import React, { useState } from 'react';
import GroceryItem from '../GroceryItem/GroceryItem';
import ItemForm from '../ItemForm/ItemForm';

export default function GroceryList() {
  const [groceriesList, setGroceriesList] = useState([
    { id: 1, item: 'veggie dogs', quantity: 3, complete: false },
    { id: 2, item: 'bananas', quantity: 2, complete: false },
    { id: 3, item: 'coffee', quantity: 7, complete: false },
  ]);

  function addListItem(item) {
    setGroceriesList([...groceriesList, item]);
  }

  return (
    <>
      <ItemForm addListItem={addListItem} />
      <section>
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
