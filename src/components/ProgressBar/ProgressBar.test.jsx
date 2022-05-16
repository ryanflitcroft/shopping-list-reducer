import { render, screen } from '@testing-library/react';
import GroceryProvider from '../../context/GroceryProvider';
import ProgressBar from '../ProgressBar/ProgressBar';

describe('renders component ProgressBar', () => {
  render(
    <GroceryProvider>
      <ProgressBar />
    </GroceryProvider>
  );

  it('should render elements div*2', () => {
    const container = screen.getByTestId('progress-container');
    const progressBar = screen.getByTestId('progress-bar');

    expect(container.childElementCount).toBe(1);
    expect(progressBar).toHaveTextContent('0%');
  });
});
