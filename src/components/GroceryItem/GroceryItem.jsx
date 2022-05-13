import React, { useState } from 'react';

export default function GroceryItem({ item }) {
  return (
    <div>
      {` id: ${item.id} `}
      {` item: ${item.item} `}
      {` qty: ${item.quantity} `}
      {` complete: ${item.complete.toString()} `}
    </div>
  );
}
