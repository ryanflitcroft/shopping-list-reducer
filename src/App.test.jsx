import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import GroceryProvider from './context/GroceryProvider';

describe('renders component App', () => {
  it('should render layout elements header, main, footer', () => {
    render(
      <GroceryProvider>
        <App />
      </GroceryProvider>
    );
    const header = screen.getByRole('banner');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('contentinfo');
  });

  it('should render a new listItem with input textContent onClick of addButton', () => {
    render(
      <GroceryProvider>
        <App />
      </GroceryProvider>
    );
    const input = screen.getByRole('textbox');
    const addButton = screen.getByTitle(/add item/i);
    const listItems = screen.getAllByRole('listitem');

    userEvent.type(input, 'test item');
    userEvent.click(addButton);
    expect(screen.getByText('test item').nodeName).toBe('LABEL');
    expect(screen.getAllByRole('listitem').length).toEqual(
      listItems.length + 1
    );
  });
});
