import React, { useState } from 'react';
import Styles from './ItemForm.css';

export default function ItemForm({ addListItem }) {
  const [itemValue, setItemValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addListItem({
      id: Date.now(),
      item: itemValue,
      complete: false,
    });
    setItemValue('');
  };

  return (
    <>
      <form className={Styles.itemForm} onSubmit={handleSubmit}>
        <label htmlFor="item">Add an item:</label>
        <input
          type="text"
          name="item"
          placeholder="bananas"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          required
        />
        <button title="Add Item">➕</button>
      </form>
    </>
  );
}
