import React, { useState } from 'react';

export default function GroceryItem() {
  const [groceryItem, setGroceryItem] = useState({
    id: '',
    item: '',
    complete: false,
  });
  return <div>GroceryItem</div>;
}
