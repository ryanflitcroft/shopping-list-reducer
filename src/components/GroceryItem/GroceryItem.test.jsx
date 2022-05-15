import { render, screen } from '@testing-library/react';
import GroceryProvider from '../../context/GroceryProvider';
import GroceryList from '../GroceryList/GroceryList';

describe('renders component GroceryItem', () => {
  it('should render elements form, label, input, div, button*2', () => {
    render(
      <GroceryProvider>
        <GroceryList />
      </GroceryProvider>
    );
    const forms = screen.getAllByTestId('checkbox-form');
    const labels = screen.getAllByTestId('checkbox-label');
    const inputs = screen.getAllByRole('checkbox');
    const divs = screen.getAllByLabelText(
      /container for update item button and delete item button/i
    );
    const updateButtons = screen.getAllByTitle(/update item/i);
    const deleteButtons = screen.getAllByTitle(/delete item/i);
  });
});
