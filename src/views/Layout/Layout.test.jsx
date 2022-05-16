import { render, screen } from '@testing-library/react';
import GroceryProvider from '../../context/GroceryProvider';
import Layout from './Layout';

describe('renders component Layout', () => {
  render(
    <GroceryProvider>
      <Layout />
    </GroceryProvider>
  );

  it('should render layout elements div*2', () => {
    expect(screen.getByRole('banner').nodeName).toBe('HEADER');
    expect(screen.getByRole('main').nodeName).toBe('MAIN');
    expect(screen.getByRole('contentinfo').nodeName).toBe('FOOTER');
  });
});
