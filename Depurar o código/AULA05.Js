Os alimentos fazem sentido
Neste desafio, você vai usar console.log() para depurar uma função que não está produzindo o resultado correto.

INSTRUÇÕES
Experimente usar console.log(whichGrocery+groceries) no for...in loop da declaração de função picker().


let whichGrocery = 'Item currently in bag:';
let groceryBag = {
  fruit: [
    'banana',
    'apple',
    'cherry',
    ___
  ],
  vegetables: [
    'potato',
    'carrot',
    'celery',
    ___
  ],
  grains: [
    'cereal',
    'pasta',
    'bread',
    ___
  ],
  ___: ___
};
function picker(bag, ___) {
  for (let item in bag) {
    let groceries = item[bag];
    console.log(whichGrocery + groceries);
  }
};
picker(groceryBag.vegetables);
