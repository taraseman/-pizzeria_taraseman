import React from 'react';

export const OrderedListContext = React.createContext({
  orderedPizzas: [],
  setorderedPizzas: () => {},
});
