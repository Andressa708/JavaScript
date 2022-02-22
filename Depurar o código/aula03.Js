Pastelaria e lógica
Neste desafio, você verá um exemplo de um erro lógico.

Erros de lógica acontecem quando há um erro no código que produz um resultado inesperado.

INSTRUÇÕES
A função hasSupplies() leva dois parâmetros que são necessários para preparar massas: ingredients, appliance.

Encontre o erro lógico na declaração de função e corrija-o para verificar os dois suprimentos, e não apenas um.
Em seguida, tente alterar a entrada no console.log() de needSupplies para readyToBake.


let readyToBake = 'You are ready to bake some pastries';
let needSupplies = 'Looks like you are missing something';
function hasSupplies(ingredients, appliance, ___) {
  if (ingredients && appliance) {
    console.log(readyToBake);
  }
};
hasSupplies('batter', 'oven');
___
