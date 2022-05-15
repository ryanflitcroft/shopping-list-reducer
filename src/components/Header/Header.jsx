import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import ItemForm from '../ItemForm/ItemForm';

export default function Header() {
  const { groceriesList, deleteListItem } = useGroceryContext();
  return (
    <>
      <header>
        <h1>Grocery List</h1>
        <p>You have {groceriesList.length} items on your list.</p>
        <ItemForm />
      </header>
    </>
  );
}
