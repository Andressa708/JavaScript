Unir
O método join combina os elementos de uma array em uma nova string.

.join() pode opcionalmente considerar uma string como um argumento e vai inserir essa string entre cada elemento conforme ele se junta à array.

Se nenhum argumento for fornecido, ele adicionará automaticamente uma vírgula. Para fazer .join() não adicionar nada, use uma string vazia '' como argumento.

Junte os elementos da array saleItems em uma string com o método de array .join()

INSTRUÇÕES
Dentro de .join():

Adicione a string ' & ' como um argumento ou experimente uma string de sua escolha.
Precisa de ajuda? Tente o fórum de suporte do Grasshopper.

let saleItems = [
  'Bug Bites',
  'String Beans',
  'Console Lager',
  ___
];
console.log('For sale: ' + saleItems.join('&'));
___
