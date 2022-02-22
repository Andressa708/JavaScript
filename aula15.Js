Finalizar compra
É hora de verificar seus itens. Como bônus, a Grasshopper Store está oferecendo frete grátis para pedidos acima de $25! Use métodos de array para finalizar a compra na loja.

Use o método map para criar um novo array que contenha o preço de cada item no cart. Em seguida, use o método reduce para somar os preços e obter o custo total.

INSTRUÇÕES
Retorna item.price nas { } do bloco de código prices

Retorna sum + price nas { } do bloco de código de total

import { cart } from 'grasshopper.store';
let prices = cart.map((item, ___) => {
  return item.price;
});
let total = prices.reduce((sum, price, ___) => {
  return sum + price;
}, 0);
console.log('Total: ' + total);
let shipping = total > 25 ? 0 : 10;
console.log('Shipping: ' + shipping);
console.log(total + shipping);
