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
        <form data-testid="checkbox-form">
          <input
            type="checkbox"
            checked={item.complete}
            name={item.item}
            value={item.item}
            onChange={handleChecked}
          />
          <label data-testid="checkbox-label" htmlFor={item.item}>
            {item.item}
          </label>
        </form>
        <div aria-label="container for update item button and delete item button">
          <button
            type="button"
            title="Update Item"
            value="Update item"
            onClick={toggleIsEditing}
          >
            ✏️
          </button>
          <button
            type="button"
            title="Delete Item"
            value="Delete item"
            onClick={handleDeleteItem}
          >
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
          <button
            type="submit"
            onClick={toggleIsEditing}
            title="Save Item"
            value="Save item"
          >
            💾
          </button>
          <button
            type="button"
            title="Delete Item"
            value="Delete item"
            onClick={handleDeleteItem}
          >
            ❌
          </button>
        </div>
      </>
    );
  }

  return content;
}
