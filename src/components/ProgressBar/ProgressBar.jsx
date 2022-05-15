import React from 'react';
import { useGroceryContext } from '../../hooks/useGroceryContext';
import Styles from './ProgressBar.css';

export default function ProgressBar() {
  const { getAverageComplete } = useGroceryContext();

  const progress = getAverageComplete() || 0;

  return (
    <div className={Styles.container}>
      <div
        className={Styles.progress}
        style={{ width: `${progress}%` }}
        aria-label="Progress bar"
      >
        {progress}%
      </div>
    </div>
  );
}
