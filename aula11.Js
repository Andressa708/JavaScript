Dentro e fora
Nessa lição, você criará uma função de seta que pega um item e retorna seu preço.

A variável groceries é importada de código adicional e contém uma array de objetos com propriedades name e price.

Complete a função de seta priceOf de forma que pegue item como entrada e retorne item.price.

INSTRUÇÕES
Dentro das {} do bloco de código da função de seta priceOf:

Adicione return item.price

import { groceries } from 'grasshopper.store';
let nameOf = (item, ___) => {
  return item.name;
};
let priceOf = (item, ___) => {
  return item.price;
};
console.log(nameOf(groceries[0]));
console.log(priceOf(groceries[0]));
