import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GroceryProvider from '../../context/GroceryProvider';
import ItemForm from './ItemForm';

describe('renders component ItemForm', () => {
  it('should render elements form, label, input, div, button*2', () => {
    render(
      <GroceryProvider>
        <ItemForm />
      </GroceryProvider>
    );
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

  it('should disable deleteAllButton onClick, and enable onClick of addButton with if input has value', () => {
    render(
      <GroceryProvider>
        <ItemForm />
      </GroceryProvider>
    );
    const deleteAllButton = screen.getByTitle(/delete all items/i);
    expect(deleteAllButton).not.toBeDisabled();

    userEvent.click(deleteAllButton);
    expect(deleteAllButton).toBeDisabled();

    const input = screen.getByRole('textbox');
    const addButton = screen.getByTitle(/add item/i);

    userEvent.type(input, 'bananas');
    userEvent.click(addButton);
    expect(deleteAllButton).not.toBeDisabled();
  });
});
