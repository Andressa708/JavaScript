Verificação de loja
Nessa lição, você usará o método includes para pesquisar um item em uma array. .includes() retornará true ou false dependendo se o item for encontrado.

Use o método .includes() com um laço for para verificar se cada item da array shoppingList pode ser encontrado na array goods.

INSTRUÇÕES
Dentro dos parênteses de .includes():

Mude a string 'clothing' para a variável item A array goods é importada de um código adicional. Ela contém: ['books', 'clothing', 'electronics', 'furniture', 'sports', 'toys']


import { goods } from 'grasshopper.store';
let shoppingList = [
  'clothing',
  'food',
  'books',
  'toiletries',
  ___
];
for (let item of shoppingList) {
  console.log(item + ': ' + goods.includes(item));
}
___
