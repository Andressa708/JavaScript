Sopa de percalços
Neste desafio, você usará as ferramentas que explorou nas lições anteriores para encontrar e corrigir vários erros. A prima de Abibi compartilhou sua própria receita de sopa, mas ela não está formatada corretamente e não está exibindo nada.

INSTRUÇÕES
Identifique os erros de sintaxe na array newRecipe e altere-os para ser código correto.

Tente adicionar algo dentro do for loop para imprimir sua saída.

printRecipe() usa um for in loop para iterar através de newRecipe, altere isso para iterar corretamente através da array newRecipe.

import { beans, rabbits, mushrooms, potatoes } from 'newRecipe';
let newRecipe = [
  {
    name: 'beans',
    kilos: 4,
    ___: ___
  },
  {
    name: 'rabbits',
    kilos: 3,
    ___: ___
  },
  {
    name: 'mushrooms',
    kilos: 2,
    ___: ___
  },
  {
    name: 'potatoes',
    kilos: 4,
    ___: ___
  },
  ___
];
function printRecipe(recipe, ___) {
  for (var element of recipe) {
    console.log(element.name + element.kilos);
  }
};
printRecipe(newRecipe);
___
