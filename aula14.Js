Clique triplo
Ao fazer compras no site da Grasshopper Store, você acidentalmente adicionou 3 escovas ao carrinho de compras em vez de 1 pente. Use métodos de array para corrigir o carrinho.

Corrija a array shoppingCart usando indexOf para encontrar a 1ª 'brush'. Depois use splice para substituir todos os 3 elementos 'brush' por 1 'comb'.

INSTRUÇÕES
Na linha let index = shoppingCart, use .indexOf() para encontrar o índice de 'brush' na array shoppingCart.

Em uma nova linha antes de console.log(), use .splice() na array shoppingCart.

Dentro dos parênteses ( ) de .splice(), adicione index, 3 e 'comb' como argumentos.

import { shoppingCart } from 'grasshopper.store';
let index = shoppingCart.indexOf('brush');
shoppingCart.splice(index, 3, 'comb'edit);
console.log(shoppingCart);
