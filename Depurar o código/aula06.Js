Hora de assar
A função startTimer() espera um número como seu parâmetro. Se for chamada com uma string, vai gerar um erro. Angel quer ter certeza de que seu código será executado mesmo se startTimer() receber dados inválidos.

INSTRUÇÕES
Crie um erro e capture-o.

Mude startTimer(30) para startTimer('thirty')
Mude console.log() para console.log(e)

import { startTimer } from 'cookbook';
try {
  startTimer('thirty', ___);
} catch (e) {
  console.log(e);
}
___
