import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import GroceryProvider from './context/GroceryProvider';

render(
  <React.StrictMode>
    <GroceryProvider>
      <Router>
        <App />
      </Router>
    </GroceryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
