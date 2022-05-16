import React from 'react';
import { render } from 'react-dom';
import App from './App';
import GroceryProvider from './context/GroceryProvider';

render(
  <React.StrictMode>
    <GroceryProvider>
      <App />
    </GroceryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
