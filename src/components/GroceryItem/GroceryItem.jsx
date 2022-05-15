import React, { useState } from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import Styles from './GroceryItem.css';

export default function GroceryItem({ item }) {
  const { deleteListItem, updateListItem } = useGroceryContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleChecked = (e) => {
    updateListItem({ ...item, complete: e.target.checked });
  };

  const toggleIsEditing = (e) => {
    e.preventDefault();
    setIsEditing(isEditing ? false : true);
  };

  const handleUpdateItem = (e) => {
    updateListItem({
      ...item,
      item: e.target.value,
    });
  };

  const handleDeleteItem = () => {
    deleteListItem(item.id);
  };

  let content;
  if (!isEditing) {
    content = (
      <>
        <form>
          <input
            type="checkbox"
            checked={item.complete}
            name={item.item}
            value={item.item}
            onChange={handleChecked}
          />
          <label htmlFor={item.item}>{item.item}</label>
        </form>
        <div>
          <button type="button" title="Update Item" onClick={toggleIsEditing}>
            ✏️
          </button>
          <button type="button" title="Delete Item" onClick={handleDeleteItem}>
            ❌
          </button>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <form onSubmit={toggleIsEditing}>
          <label htmlFor={item.item}>Update:</label>
          <input
            type="text"
            name={item.item}
            value={item.item}
            onChange={handleUpdateItem}
          />
        </form>
        <div>
          <button type="submit" onClick={toggleIsEditing} title="Save Item">
            💾
          </button>
          <button type="button" title="Delete Item" onClick={handleDeleteItem}>
            ❌
          </button>
        </div>
      </>
    );
  }

  return content;
}
