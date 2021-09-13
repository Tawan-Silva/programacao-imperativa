// Crie um array que contenha nomes de produtos para compra.
// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 
// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.
// console.log(“O método Join realiza tal coisa”)

var comprar = ["Peito de Frango", "Arroz", "Patata Palha", "Feijão", "Coca-cola"];
var novaCompra = comprar.join(" - "); // junta os elemtenos do array com o separador especificado

console.log(novaCompra);

comprar.pop(); // pop() elimina último elemento do array

console.log(comprar)

comprar.push("Adicionei isso mesmo"); //push() adiciona 1 ou mais elementos ao final do array

console.log(comprar);

comprar.shift(); //shifit() elimina o primeiro elemento do array

console.log(comprar);

comprar.unshift("Tudo novo"); // unshift() adiciona 1 ou mais elementos no inicio do array

console.log(comprar);



