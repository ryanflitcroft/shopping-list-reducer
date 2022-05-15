import React, { useState } from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import Styles from './ItemForm.css';

export default function ItemForm() {
  const { groceriesList, addListItem, deleteAllListItems } =
    useGroceryContext();
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

  const handleDeleteAll = () => {
    deleteAllListItems();
  };

  return (
    <>
      <form id="item-form" className={Styles.itemForm} onSubmit={handleSubmit}>
        <label htmlFor="item">Add an item:</label>
        <input
          type="text"
          name="item"
          placeholder="veggie burgers?"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          required
        />
        <div>
          <button
            form="item-form"
            type="submit"
            title="Add Item"
            value="Add an item"
          >
            ➕
          </button>
          <button
            type="button"
            title="Delete All Items"
            value="Delete all items"
            onClick={handleDeleteAll}
            disabled={!groceriesList.length}
          >
            ␡
          </button>
        </div>
      </form>
    </>
  );
}
