import React from 'react';
import PropTypes from 'prop-types';
import { pizzasImages } from '../../pizzasMenu';
import './OrderedList.scss';

export const OrderedList = ({ orderedPizzas }) => (
  <ul className="ordered-pizzas-list">
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
  </ul>
);

OrderedList.propTypes = {
  orderedPizzas: PropTypes.arrayOf.isRequired,
};
