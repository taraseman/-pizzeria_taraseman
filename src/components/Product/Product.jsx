import React, { useContext, useState } from 'react';
import { ProductsContext } from '../ProductsContext';
import { Popup } from '../Popup';
import { pizzasImages } from '../../pizzasMenu';

import './Product.scss';

export const Product = ({ name, ingredients, takePizza }) => {
  const a = 0;

  return (
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
};
