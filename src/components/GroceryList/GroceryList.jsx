import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import GroceryItem from '../GroceryItem/GroceryItem';
import ItemForm from '../ItemForm/ItemForm';
import Styles from './GroceryList.css';

export default function GroceryList() {
  const { groceriesList } = useGroceryContext();

  return (
    <>
      <ItemForm />
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
