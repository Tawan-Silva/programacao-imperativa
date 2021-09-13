        //Métodos de strings
var texto = "Tawan deveria comprar o pão e fazer café";

console.log(texto.length); // length percorre e retorna o comprimento da string

console.log(texto.indexOf()); // indexof() verifica e retorna -1 por não encontrar o que procura  

console.log(texto.indexOf("comprar")); // indexof() verifica e retorna 11 por "Tawan" inicia apartir do 11

console.log(texto.slice(0, 36)); //  slice retorna onde começa e termina o parâmetro passado

var palavra = texto.slice(0, 40); // inserindo o resultado do slice na  variável palavra
console.log(palavra);

console.log("    A glinha pintadinha           "); // sem o método trim()
console.log("    A glinha pintadinha           ".trim()); // retira espaços das palavra do inicio ou fim

console.log(texto.split()); // transforma string em array
console.log(texto.split(" ")); // transforma a string texto em array apartir dos espaços

console.log(texto.replace("Tawan", "Silva")); // substutui o valor 1 pelo valor 2 passado
console.log(texto.replace("deveria comprar", "nada"));// substutui o valor 1 pelo valor 2 passado
 