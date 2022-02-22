Hora de fechar
Nesse desafio, você usará um laço for clássico para iterar sobre todos os outros elementos em uma array.

Um laço for clássico tem 3 partes:

Uma condição inicial que declara uma variável e dá a ela um valor.
Um teste que mantém o laço for clássico em execução enquanto o teste for verdadeiro.
Uma operação de atualização que altera a variável após cada iteração.
A array closingTimes contém uma lista de horários como strings. Atualize todos os outros elementos da array com um laço for clássico.

INSTRUÇÕES
Dentro da configuração ( ) do laço for clássico, mude o i += 1 para i += 2
Dentro das { } do bloco de código, mude '5pm' para '9pm'
Lembre-se de que o 1º item de uma array está no índice 0.


import { closingTimes } from 'grasshopper.store';
console.log(closingTimes);
for (let i = 0; i < closingTimes.length; i += 2) {
  closingTimes[i] = '9pm';
}
console.log(closingTimes);
___