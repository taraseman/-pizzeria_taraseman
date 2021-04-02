import React from 'react';

export const ProductsContext = React.createContext({
  allOrderedPizzas: [],
  setAllOrderedPizzas: () => {},
});
