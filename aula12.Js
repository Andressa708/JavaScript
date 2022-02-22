Siga o mapa
Nessa lição, você usará o método map para chamar uma função em cada elemento em uma array e retornar os resultados para uma nova array.

Por exemplo:

[1, 2, 3]​.map(num => { 
return num * 2; 
}) 
retornará a nova array: [2, 4, 6].

A variável groceries é importada e armazena uma array de objetos com propriedades name e price.

INSTRUÇÕES
Dentro da função de seta prices:

Adicione item como a entrada dentro dos parênteses ()
Adicione return item.price ao bloco de código {}

import { groceries } from 'grasshopper.store';
let names = groceries.map((item, ___) => {
  return item.name;
});
let prices = groceries.map((item, ___) => {
  return item.price;
});
___
console.log('Names: ' + names);
console.log('Prices: ' + prices);
