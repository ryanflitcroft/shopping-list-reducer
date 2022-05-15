import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

describe('renders component Footer', () => {
  render(<Footer />);

  it('should render elements footer', () => {
    screen.getByRole('contentinfo');
  });
});
