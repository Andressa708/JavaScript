Começando pequeno
Nessa lição, você usará o método shift para remover o 1º elemento de uma array e registrá-lo no console. .shift() é como .pop() exceto que remove o elemento no índice 0.

A variável televisions é uma array de TV objetos. Cada objeto tem 2 propriedades: size e price. A array é classificada do menor size para o maior.

INSTRUÇÕES
Abaixo do último comando console.log():

Adicione uma chamada de função printTV()
Use televisions.shift() como o argumento


CÓDIGO
Aqui é onde você digita o código

É aqui que o editor sinaliza possíveis erros. Você pode passar o cursor sobre um ícone para ver mais informações.

import { televisions } from 'grasshopper.store';
function printTV(tv, ___) {
  console.log(tv.size + ' for $' + tv.price);
};
televisions.forEach(printTV);
console.log('The top item was:');
printTV(televisions.shift());
console.log('The next smallest TV:');
printTV(televisions.shift());
___