import React from 'react';
import PropTypes from 'prop-types';

import { pizzasImages } from '../../pizzasMenu';
import './Product.scss';

export const Product = ({ name, ingredients, takePizza }) => (
  <div className="product">
    <img
      className="product__img"
      src={pizzasImages[name]}
      alt={name}
    />
    <h3 className="product__name">{name}</h3>
    <p className="product__ingredients">{ingredients.join(', ')}</p>
    <button
      type="button"
      className="product__button"
      onClick={() => takePizza(name)}
    >
      Into basket
    </button>
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf.isRequired,
  takePizza: PropTypes.objectOf.isRequired,
};
