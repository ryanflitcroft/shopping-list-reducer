import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import GroceryItem from '../GroceryItem/GroceryItem';
import Styles from './GroceryList.css';

export default function GroceryList() {
  const { groceriesList } = useGroceryContext();

  return (
    <>
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
