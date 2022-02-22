Tamanho maior
Nessa lição, você usará o método splice para substituir alguns itens de uma array por novos itens.

O método .splice() tem 3 argumentos:

O índice para começar a selecionar
O número de itens a serem substituídos
Os novos itens a serem inseridos
As camisas médias ('M') e grandes ('L') estão esgotadas, por isso devem ser excluídas. Mas as camisas 'XL' estão de volta ao estoque, então devem ser adicionadas de volta à array.

Remova 'M' e 'L' e insira um 'XL' em seus lugares usando shirtSizes.splice(). Começando em índice 1, substitua os próximos 2 itens por 1 'XL'.

INSTRUÇÕES
Mude startPoint para 1

Mude itemsToReplace para 2


import { shirtSizes } from 'grasshopper.store';
let startPoint = 1;
let itemsToReplace = 2edit;
let newItem = 'XL';
console.log('old: ' + shirtSizes);
shirtSizes.splice(startPoint, itemsToReplace, newItem);
console.log('new: ' + shirtSizes);
