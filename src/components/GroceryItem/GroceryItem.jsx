import React, { useState } from 'react';
import Styles from './GroceryItem.css';

export default function GroceryItem({ item, deleteListItem }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChecked = (e) => {
    // update item for complete (e.target.checked);
  };

  const handleUpdateItem = (id, payload) => {
    // update item by id
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
        <form>
          <label htmlFor={item.item}>Update:</label>
          <input
            type="text"
            name={item.item}
            value={item.item}
            onChange={handleUpdateItem}
          />
        </form>
        <div>
          <button title="Save Item" onClick={() => setIsEditing(false)}>
            💾
          </button>
          <button title="Delete Item" onClick={handleDeleteItem}>
            ❌
          </button>
        </div>
      </>
    );
  }

  return (
    // <>
    //   <form>
    //     <input
    //       type="checkbox"
    //       name={item.item}
    //       value={item.item}
    //       onChange={handleChange}
    //     />
    //     <label htmlFor={item.item}>{item.item}</label>
    //   </form>
    //   <div>
    //     <button title="Update Item">✏️</button>
    //     <button title="Delete Item">❌</button>
    //   </div>
    // </>
    content
  );
}
