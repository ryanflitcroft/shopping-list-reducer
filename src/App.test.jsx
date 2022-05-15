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
    expect(screen.getByRole('banner').nodeName).toBe('HEADER');
    expect(screen.getByRole('main').nodeName).toBe('MAIN');
    expect(screen.getByRole('contentinfo').nodeName).toBe('FOOTER');
  });
});
