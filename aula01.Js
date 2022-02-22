Escreva uma função que pega uma string e retorna um objeto. O objeto deve ter uma propriedade para cada um dos caracteres da string. Cada propriedade deve armazenar uma array de índices em que os caracteres estão localizados. Por exemplo: mapString('boohoo') retornaria:

{ b: [0], o: [1, 2, 4, 5], h: [3] }


import { word } from 'grasshopper.wordList';
console.log(word);
function mapString(string, ___) {
  let map = {
    ___: ___
  };
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [
        i,
        ___
      ];
    }
  }
  return map;
};
let stringMap = mapString(word);
for (let letter in stringMap) {
  console.log(letter + ': ' + stringMap[letter]);
}
___
