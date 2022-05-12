import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GroceryList from '../GroceryList/GroceryList';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route path="/">
          <GroceryList />
        </Route>
      </Switch>
    </main>
  );
}
