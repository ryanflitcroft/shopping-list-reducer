import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import GroceryProvider from './context/GroceryProvider';

describe('renders component App', () => {
  render(
    <GroceryProvider>
      <App />
    </GroceryProvider>
  );

  it('should render layout elements header, main, footer', () => {
    const header = screen.getByRole('banner');
    const main = screen.getByRole('main');
    const footer = screen.getByRole('contentinfo');
  });
});
