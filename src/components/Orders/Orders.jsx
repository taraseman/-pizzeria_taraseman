import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../ProductsContext';
import { getAllIngridients } from '../../helpers';
import './Orders.scss';

export const Orders = () => {
  const [ingridients, setIngridients] = useState([]);
  const { allOrderedPizzas } = useContext(ProductsContext);
  const arrOfAllPizzas = allOrderedPizzas.flat(1);

  useEffect(() => {
    setIngridients(getAllIngridients(arrOfAllPizzas));
  },
  []);

  return (
    <div className="orders">
      <Link to="/" className="orders__link-home">Home</Link>
      <h2 className="orders__ing-title">Ingridients rating</h2>
      <ul className="orders__ingridients">
        {(ingridients || []).map(ingridient => (
          <li key={ingridient} className="orders__ingridients__item">
            {ingridient}
          </li>
        ))}
      </ul>
      <h2 className="orders__orders-title">Orders Info</h2>
      <ul className="orders__list">
        {allOrderedPizzas.map(order => (
          <li className="orders__list__item">
            {order.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};
