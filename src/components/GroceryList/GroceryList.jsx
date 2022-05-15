import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import GroceryItem from '../GroceryItem/GroceryItem';
import ProgressBar from '../ProgressBar/ProgressBar';
import Styles from './GroceryList.css';

export default function GroceryList() {
  const { groceriesList } = useGroceryContext();

  return (
    <>
      {groceriesList.length ? (
        <section className={Styles.itemList}>
          <h2>Don't forget these groceries!</h2>
          <ul>
            {groceriesList.map((item, i) => (
              <li key={`${item.id}${i}`}>
                <GroceryItem item={item} />
              </li>
            ))}
          </ul>
          <ProgressBar />
        </section>
      ) : (
        <p className={Styles.itemList}>Add some groceries to your list! ☝️</p>
      )}
    </>
  );
}
