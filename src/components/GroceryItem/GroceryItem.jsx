import React, { useState } from 'react';
import Styles from './GroceryItem.css';

export default function GroceryItem({ item, deleteListItem, updateListItem }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChecked = (e) => {
    updateListItem({ ...item, complete: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleUpdateItem = (e) => {
    updateListItem({ ...item, item: e.target.value });
  };

  const handleDeleteItem = () => {
    // delete item by id
    deleteListItem(item.id);
  };

  let content;
  if (!isEditing) {
    content = (
      <>
        <form>
          <input
            type="checkbox"
            name={item.item}
            value={item.item}
            onChange={handleChecked}
          />
          <label htmlFor={item.item}>{item.item}</label>
        </form>
        <div>
          <button title="Update Item" onClick={() => setIsEditing(true)}>
            ✏️
          </button>
          <button title="Delete Item" onClick={handleDeleteItem}>
            ❌
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <form id="updateForm" onSubmit={handleSubmit}>
          <label htmlFor={item.item}>Update:</label>
          <input
            type="text"
            name={item.item}
            value={item.item}
            onChange={handleUpdateItem}
          />
        </form>
        <div>
          <button form="updateForm" type="submit" title="Save Item">
            💾
          </button>
          <button title="Delete Item" onClick={handleDeleteItem}>
            ❌
          </button>
        </div>
      </>
    );
  }

  return content;
}
