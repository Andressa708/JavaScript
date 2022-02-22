Peso estranho
Neste desafio, você vai usar console.log() várias vezes para ver exatamente o que está acontecendo em cada etapa da função increaseBatches().

INSTRUÇÕES
Experimente colocar console.log(itemWeight + i.kilos) dentro do laço for...of na função printTotalWeight() antes de total += i.kilos;

Experimente colocar console.log(totalWeight + total) depois de total += i.kilos;

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
    kilos: 'two',
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
    console.log(itemWeight + i.kilos);
    total += i.kilos;
    console.log(totalWeight + total);
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
    ingredients.forEach(printIngredient(___));
  } catch (e) {
    console.log(e);
  }
};
prepareRecipeCards();
