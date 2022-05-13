import React, { useState } from 'react';
import Styles from './GroceryItem.css';

export default function GroceryItem({ item }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setIsEditing(e.target.checked);
  };

  return (
    <>
      <form>
        <input
          type="checkbox"
          name={item.item}
          value={item.item}
          onChange={handleChange}
        />
        <label htmlFor={item.item}>{item.item}</label>
      </form>
      <div>
        <button title="Update Item">✏️</button>
        <button title="Delete Item">❌</button>
      </div>
    </>
  );
}
