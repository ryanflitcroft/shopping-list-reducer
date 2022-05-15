import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import GroceryProvider from './context/GroceryProvider';

describe('renders component App', () => {
  it('should render layout elements header, main, footer', () => {
    render(
      <GroceryProvider>
        <App />
      </GroceryProvider>
    );

    screen.getByRole('banner');
    screen.getByRole('main');
    screen.getByRole('contentinfo');
  });
});
