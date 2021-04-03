import React, { useContext, useState, useEffect, useCallback } from 'react';

import { Product } from '../Product';
import { ProductsContext } from '../ProductsContext';
import { pizzasMenu } from '../../pizzasMenu';
import { OrderedList } from '../OrderedList';
import { Popup } from '../Popup';

import './ProductList.scss';

export const ProductList = () => {
  const [orderedPizzas, setOrderedPizzas] = useState([]);
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const { allOrderedPizzas, setAllOrderedPizzas } = useContext(ProductsContext);
  const takePizza = useCallback((pizzaName) => {
    setOrderedPizzas([...orderedPizzas, pizzaName]);
  });

  useEffect(() => {
    if (orderedPizzas.length > 9) {
      setPopupVisibility(true);
    }
  });

  const clearOrderedPizzas = () => {
    setOrderedPizzas([]);
    setPopupVisibility(false);
  };

  const makeOrder = () => {
    setAllOrderedPizzas([...allOrderedPizzas, orderedPizzas]);
    setOrderedPizzas([]);
    setPopupVisibility(false);
  };

  return (
    <>
      <h1 className="title">Pizzas</h1>
      <ul className="product-list">
        {Object.entries(pizzasMenu).map(([pizzaName, pizza]) => (
          <li
            key={pizzaName}
            className="product-list__product"
          >
            <Product
              name={pizzaName}
              ingredients={Object.keys(pizza)}
              takePizza={takePizza}
              orderedPizzas={orderedPizzas}
            />
          </li>
        ))}
      </ul>
      {(orderedPizzas.length > 0)
        && (
          <button
            type="button"
            className="ordered-button"
            onClick={() => setPopupVisibility(true)}
          >
            {`buy ${orderedPizzas.length} pizzas`}
          </button>
        )
      }
      <Popup
        trigger={isPopupVisible}
        setPopupVisibility={setPopupVisibility}
      >
        <OrderedList
          orderedPizzas={orderedPizzas}
        />
        <button
          type="button"
          className="popup-buy__button"
          onClick={makeOrder}
        >
          BUY
        </button>
        <button
          type="button"
          className="popup-buy__clear"
          onClick={clearOrderedPizzas}
        >
          clear list
        </button>
      </Popup>
    </>
  );
};
