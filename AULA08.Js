Ordem inversa
Neste desafio, você usará o método reverse para inverter a ordem dos elementos de uma array.

A variável groceries contém uma array de objetos comestíveis. Cada objeto tem as propriedades name e price. A array é classificada por preço, do menos caro ao mais caro.

INSTRUÇÕES
Inverta a ordem da array adicionando .reverse() à variável groceries que está sozinha em uma linha

import { groceries } from 'grasshopper.store';
function printItem(item, ___) {
  console.log(item.name + ': $' + item.price);
};
groceries.reverse();
groceries.forEach(printItem);
___
