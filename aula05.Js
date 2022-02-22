Erro no leite
O método lastIndexOf é semelhante a indexOf, mas pesquisa ao contrário, do final de uma array. Se nenhum elemento for encontrado, .lastIndexOf() retornará -1.

Ao finalizar as compras no supermercado, 'milk' foi escaneado acidentalmente duas vezes. Encontre o índice do 2º 'milk' usando .lastIndexOf().

INSTRUÇÕES
Dentro dos parênteses de .lastIndexOf():

Adicione 'milk' como um argumento

import { cart } from 'grasshopper.store';
console.log(cart);
let index = cart.lastIndexOf('milk'edit);
console.log('The extra item is at index: ' + index);
