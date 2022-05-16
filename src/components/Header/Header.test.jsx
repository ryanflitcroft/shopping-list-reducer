import { render, screen, waitFor } from '@testing-library/react';
import GroceryProvider from '../../context/GroceryProvider';
import Header from './Header';

describe('renders component Header', () => {
  render(
    <GroceryProvider>
      <Header />
    </GroceryProvider>
  );

  it('should render elements header, h1, p, form, label, input, div, button*2', () => {
    const header = screen.getByRole('banner');
    const h1 = screen.getByRole('heading', {
      name: /grocery list/i,
    });
    const p = screen.getByText(/you have 5 items on your list\./i);
    const form = screen.getByRole('form', {
      name: /submit text input to add an item to you list/i,
    });
    const label = screen.getByText(/add an item:/i);
    const input = screen.getByRole('textbox');
    const div = screen.getByRole('presentation', {
      name: /container for add item button and delete all items button/i,
    });
    const addButton = screen.getByTitle(/add item/i);
    const deleteAllButton = screen.getByTitle(/delete all items/i);
  });
});
