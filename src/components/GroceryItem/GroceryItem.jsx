import React from 'react';

export default function GroceryItem({ item }) {
  return (
    <>
      <input type="checkbox" name={item.item} value={item.item} />
      <label htmlFor={item.item}>
        {item.item} - {item.quantity}
      </label>
    </>
  );
}
