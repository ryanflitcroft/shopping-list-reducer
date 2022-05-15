import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import Styles from './ProgressBar.css';

export default function ProgressBar() {
  const { getAverageComplete } = useGroceryContext();

  const progress = getAverageComplete() || 0;

  return (
    <div
      className={Styles.container}
      aria-label="container for progress bar"
      data-testid="progress-container"
    >
      <div
        className={Styles.progress}
        style={{ width: `${progress}%` }}
        aria-label="progress bar"
        data-testid="progress-bar"
      >
        {progress}%
      </div>
    </div>
  );
}
