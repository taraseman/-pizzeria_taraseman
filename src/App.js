import React, { useState, useMemo } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { ProductList } from './components/ProductList';
import { ProductsContext } from './components/ProductsContext';
import { RatingHeader } from './components/RatingHeader';
import { Orders } from './components/Orders';
import './App.scss';

export function App() {
  const [allOrderedPizzas, setAllOrderedPizzas] = useState([]);

  const contextValue = useMemo(() => (
    {
      allOrderedPizzas,
      setAllOrderedPizzas,
    }
  ), [allOrderedPizzas]);

  return (
    <div className="App">
      <ProductsContext.Provider value={contextValue}>
        <HashRouter>
          <Switch>
            <Route path="/orders" component={Orders} exact />
            <Route>
              <RatingHeader allOrderedPizzas={allOrderedPizzas} />
              <ProductList />
            </Route>
          </Switch>
        </HashRouter>
      </ProductsContext.Provider>
    </div>
  );
}
