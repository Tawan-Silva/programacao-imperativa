var familia = ["Tawan", "Roseli", "Francisco", "Priscilla"];

familia.push("Alicia"); // push() adiciona o elemento no final do arary

console.log(familia);

familia.pop(); // pop() elimina o último elemento do array

console.log(familia);

familia.shift(); // shift() elimina o primeiro elemento de um array

console.log(familia);

familia.unshift("Cebola para ela ->"); // unshift() adiciona 1 ou mais elementos no inicio do array
familia.unshift("Cebola para ela ->", "Para ela ->");
console.log(familia);

var teste = ["paçoca", "salada", "dinheiro"]
var ver = teste.join(" - "); // join() junta os elementos usando separador que especificamos
console.log(ver);
var ver = teste.join(" Separado ");
console.log(ver);

var novoTeste = new teste.Includes("salada"); // joint() verifica se o elemento existe, retornando booleano.
console.log(novoTeste);
// var salada = ["Uva", "Katchup", "Cebula", "Pinga"]

// salada.lastIndexOf("dinheiro"); // lastIndexOf() retorna o último elemento passado 
// console.log(salada);

// salada.IndexOf("Não existe"); // lastIndexOf() aqui retorna -1 porque o valor não existe no array
// console.log(salada);
