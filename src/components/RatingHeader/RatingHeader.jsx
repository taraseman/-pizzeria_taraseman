import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getTop5Pizzas } from '../../helpers';

import './RatingHeader.scss';

export const RatingHeader = ({ allOrderedPizzas }) => {
  const [top5Pizzas, setTop5Pizzas] = useState();

  useEffect(() => {
    const arrOfAllPizzas = allOrderedPizzas.flat(1);

    setTop5Pizzas(getTop5Pizzas(arrOfAllPizzas));
  }, [allOrderedPizzas]);

  return (
    <header className="header">
      {top5Pizzas
          && (
          <>
            <Link
              to="/orders"
              className="header__link-to-orders"
            >
              Orders Details
            </Link>
            <h2 className="header__title">Top 5</h2>
            <ul className="header__rating">
              {top5Pizzas.map(pizzaName => (
                <li
                  className="header__item"
                  key={pizzaName}
                >
                  <img
                    src={'https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?size=338&ext=jpg'}// eslint-disable-line
                    alt="pizza logo"
                    className="header__img"
                  />
                  {pizzaName}
                </li>
              ))}
            </ul>
          </>
          )
        }
    </header>
  );
};

RatingHeader.propTypes = {
  allOrderedPizzas: PropTypes.arrayOf,
};

RatingHeader.defaultProps = {
  allOrderedPizzas: [],
};
