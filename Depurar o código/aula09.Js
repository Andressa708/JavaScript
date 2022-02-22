Problema para imprimir
O comando try...catch em prepareRecipeCards imprime um erro. Leia o erro e corrija o código.

INSTRUÇÕES
Leia a mensagem de erro: Cannot read property 'kilos' of undefined

Na função prepareRecipeCards(), substitua printIngredient() por printIngredient para ver os pesos de todos os ingredientes.


import { addIngredient } from 'cookbook';
import { itemWeight, totalWeight } from 'debugging';
let ingredients = [
  {
    name: 'potatoes',
    kilos: 4,
    ___: ___
  },
  {
    name: 'carrots',
    kilos: 2,
    ___: ___
  },
  {
    name: 'onions',
    kilos: 1,
    ___: ___
  },
  {
    name: 'chickens',
    kilos: 2,
    ___: ___
  },
  ___
];
let leeks = {
  name: 'leeks',
  kilos: 1.5,
  ___: ___
};
function printTotalWeight(___) {
  let total = 0;
  for (let i of ingredients) {
    total += i.kilos;
  }
  print('Total ingredient weight: ' + total + ' kilos');
};
function printIngredient(ingredient, ___) {
  print(ingredient.kilos + ' kilos ' + ingredient.name);
};
function prepareRecipeCards(___) {
  try {
    addIngredient(leeks, ___);
    printTotalWeight();
    print('ingredients:');
    ingredients.forEach(printIngredient);
  } catch (e) {
    console.log(e);
  }
};
prepareRecipeCards();
_