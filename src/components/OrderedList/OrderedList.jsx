import React from 'react';
import { pizzasImages } from '../../pizzasMenu';
import './OrderedList.scss';

export const OrderedList = ({ orderedPizzas }) => (
  <ol className="ordered-pizzas-list">
    {orderedPizzas.map(pizza => (
      <li className="ordered-pizzas-list__item">
        <img
          src={pizzasImages[pizza]}
          alt={`img_${pizza}`}
          className="ordered-pizzas-list__item__img"
        />
        <p className="ordered-pizzas-list__item__name">{pizza}</p>
      </li>
    ))}
    <p>{`${orderedPizzas.length} pizzas`}</p>
  </ol>
);
