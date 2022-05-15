import { render, screen, waitFor } from '@testing-library/react';
import GroceryProvider from '../../context/GroceryProvider';
import GroceryList from './GroceryList';

describe('renders component GroceryList', () => {
  render(
    <GroceryProvider>
      <GroceryList />
    </GroceryProvider>
  );

  it('should render elements section, h2, ul, li', () => {
    const section = screen.getByRole('region', {
      name: /container for grocery list/i,
    });
    const h2 = screen.getByRole('heading', {
      name: /don't forget these groceries!/i,
    });
    const ul = screen.getByRole('list');
    const li = screen.getAllByRole('listitem');
  });
});
