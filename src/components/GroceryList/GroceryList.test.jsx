import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GroceryProvider from '../../context/GroceryProvider';
import GroceryList from './GroceryList';

describe('renders component GroceryList', () => {
  render(
    <GroceryProvider>
      <GroceryList />
    </GroceryProvider>
  );

  it('should render GroceryList elements section, h2, ul, li', () => {
    const section = screen.getByRole('region', {
      name: /container for grocery list/i,
    });
    const h2 = screen.getByRole('heading', {
      name: /don't forget these groceries!/i,
    });
    const ul = screen.getByRole('list');
    const li = screen.getAllByRole('listitem');
  });

  it('should render GroceryItem elements form, label, input, div, button*2', () => {
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

  it('should render text inputs onClick of updateButton, and update a GroceryItem with input value onClick of saveButton', () => {
    render(
      <GroceryProvider>
        <GroceryList />
      </GroceryProvider>
    );
    screen.getAllByRole('checkbox');
    const labels = screen.getAllByTestId('checkbox-label');
    expect(labels[0]).not.toHaveTextContent('test item');

    const updateButtons = screen.getAllByTitle(/update item/i);
    userEvent.click(updateButtons[0]);
    waitForElementToBeRemoved(updateButtons);

    const saveButtons = screen.getAllByTitle(/save item/i);
    const textInputs = screen.getAllByRole('textbox');
    userEvent.clear(textInputs[0]);
    userEvent.type(textInputs[0], 'test item');
    userEvent.click(saveButtons[0]);
    waitForElementToBeRemoved(saveButtons);

    screen.getAllByTitle(/update item/i);

    const updatedLabels = screen.getAllByTestId('checkbox-label');
    const updatedLabel = screen.getByText('test item');
    expect(updatedLabels[0]).toEqual(updatedLabel);
  });

  it('should updated attribute checked onclick for checkboxInputs', () => {
    render(
      <GroceryProvider>
        <GroceryList />
      </GroceryProvider>
    );
    const checkboxInputs = screen.getAllByRole('checkbox');
    expect(checkboxInputs[0]).not.toBeChecked();
    userEvent.click(checkboxInputs[0]);
    expect(checkboxInputs[0]).toBeChecked();
  });
});
