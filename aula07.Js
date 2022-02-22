Metade do preço
Nessa lição, você usará o método unshift para adicionar um item a uma array. .unshift() é como .push() exceto que adiciona os novos itens ao início de uma array.

Você tem um desconto de 50% na menor TV. Depois de obter a smallTV, defina o preço como a metade do valor original antes de mudar novamente para a array.

INSTRUÇÕES
Na linha de código que diz, smallTV.price = 5:

Mude 5 para smallTV.price / 2

import { televisions, printTV } from 'grasshopper.store';
televisions.forEach(printTV);
let smallTV = televisions.shift();
smallTV.price = smallTV.price / 2;
televisions.unshift(smallTV);
console.log('Updated List:');
televisions.forEach(printTV);
