import { pizzasMenu } from './pizzasMenu';
/* eslint-disable */

export const getTop5Pizzas = (lastPizzas) => {
  if (lastPizzas.length === 0) {
    return;
  }

  const pizzasInfo = [];

  lastPizzas.forEach((pizzaName) => {
    const currentPizza = pizzasInfo.find(pizza => pizza.name === pizzaName);

    if (currentPizza) {
      currentPizza.number++;
    } else {
      pizzasInfo.push({
        name: pizzaName,
        number: 1,
        ingridients: pizzasMenu[pizzaName],
      });
    }
  });

  const top5Pizzas = [...pizzasInfo]
    .sort((pizzaA, pizzaB) => pizzaB.number - pizzaA.number).slice(0, 5);

  return (top5Pizzas.map(({ name }) => name));// eslint-disable-line
};

export function getAllIngridients(lastPizzas) {
  if (lastPizzas.length === 0) {
    return;
  }

  const pizzasInfo = [];

  lastPizzas.forEach((pizzaName) => {
    const currentPizza = pizzasInfo.find(pizza => pizza.name === pizzaName);

    if (currentPizza) {
      currentPizza.number++;
    } else {
      pizzasInfo.push({
        name: pizzaName,
        number: 1,
        ingridients: pizzasMenu[pizzaName],
      });
    }
  });

  const currentIngridients = [];

  pizzasInfo.forEach((pizza) => {
    for (const key in pizza.ingridients) {
        const currentIngridient = currentIngridients
          .find((ingridient) => ingridient.ingredientName === key);
      if (currentIngridient) {
            currentIngridient.quantity += pizza.ingridients[key] * pizza.number;
        } else {
            currentIngridients.push({
                    ingredientName: key,
                    quantity: pizza.ingridients[key] * pizza.number, 
        });
      }
    }
  });

  currentIngridients.sort(
    (ingredientA, ingredientB) => ingredientB.quantity - ingredientA.quantity,
  );

  window.console.log(currentIngridients.map(({ ingredientName }) => ingredientName));

  return (currentIngridients.map(({ ingredientName }) => ingredientName));
}