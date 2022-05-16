import { useContext } from 'react';
import { GroceryContext } from '../context/GroceryProvider';

export const useGroceryContext = () => {
  const context = useContext(GroceryContext);

  if (context === undefined) {
    throw new Error('useGroceryContext must be used within GroceryProvider');
  }

  return context;
};
