Café da manhã dos campeões
Nessa lição, você usará o método indexOf para encontrar o número de índice do seu cereal favorito.

A array bestCereals contém uma lista dos principais cereais da loja. Como os elementos da array são numerados a partir de 0, o cereal com melhor classificação é aquele no índice 0.

INSTRUÇÕES
Para ver qual é a classificação do seu cereal favorito:

Altere o argumento de .indexOf() para favorite

import { bestCereals } from 'grasshopper.store';
let favorite = 'ant bran';
console.log(bestCereals.includes(favorite) ? bestCereals.indexOf(favorite) : 'Not on the list.');
___
