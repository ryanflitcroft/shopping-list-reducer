import React, { useState } from 'react';
import ItemForm from '../ItemForm/ItemForm';

export default function GroceryList() {
  const [groceriesList, setGroceriesList] = useState([]);

  return (
    <>
      <ItemForm />
      <section>GroceryList</section>
    </>
  );
}
