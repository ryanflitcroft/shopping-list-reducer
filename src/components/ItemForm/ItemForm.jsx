import React, { useState } from 'react';

export default function ItemForm({ addListItem }) {
  const [itemValue, setItemValue] = useState('');
  const [quantityValue, setQuantityValue] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addListItem({
      id: Date.now(),
      item: itemValue,
      quantity: quantityValue,
      complete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          name="item"
          placeholder="bananas"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          required
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          placeholder="qty"
          min="1"
          value={quantityValue}
          onChange={(e) => setQuantityValue(e.target.value)}
          required
        />
        <button>Add Item</button>
      </form>
    </>
  );
}
