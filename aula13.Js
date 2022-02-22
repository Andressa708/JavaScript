Todos por um
Nessa lição, você usará o método reduce para somar todos os valores de uma array. .reduce() usa uma array para calcular um único valor, por exemplo a soma. .reduce() usa 2 argumentos: uma função retorno de chamada e um valor inicial. O retorno de chamada também usa 2 parâmetros: o valor total até agora e o valor atual.

Por exemplo:

[1, 2, 3]​.reduce((sum, number) => { 
  return sum + number; 
}, 0) 
retornará 6, porque 1 + 2 + 3 === 6.

Complete a função de seta para encontrar o totalCost, que deve ser a soma de todos os valores de price.

INSTRUÇÕES
Entre as chaves {} de (sum, price) => {...}:

Adicione return sum + price
Precisa de ajuda? Tente o fórum de suporte do Grasshopper.

import { hours, prices } from 'grasshopper.store';
console.log(hours);
let totalHours = hours.reduce((sum, today, ___) => {
  return sum + today;
}, 0);
console.log('Total Hours: ' + totalHours);
console.log(prices);
let totalCost = prices.reduce((sum, price, ___) => {
  return sum + price;
}, 0);
console.log('Total Cost: ' + totalCost);
