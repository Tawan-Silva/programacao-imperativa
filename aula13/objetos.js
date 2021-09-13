// Rhuam Bello
// Alcilene Reis
// Tawan Silva
// Denis Galdino

let cliente = {
    numero: 1586272624,
    tipo: "Conta Corrente",
    saldo: 1558,
    titular: "Fernando"
}


function Cliente(numConta, tipo, saldo, titular) {
    this.numero = numConta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let cliente1 = new Cliente(5486273622, "Conta Corrente", 27771, "Abigael Natte");
let cliente2 = new Cliente(1183971869, "Conta Poupança", 8675, "Ramon Connell");
let cliente3 = new Cliente(9582019689, "Conta Poupança", 27363, "Jarret Lafuente");
let cliente4 = new Cliente(1761924656, "Conta Poupança", 32415,	"Ansel Ardley");
let cliente5 = new Cliente(7401971607, "Conta Poupança", 18789, "Jacki Shurmer");
let cliente6 = new Cliente(630841470, "Conta Corrente", 28776, "Jobi Mawtus");
let cliente7 = new Cliente(4223508636, "Conta Corrente", 2177, "Thomasin Latour");
let cliente8 = new Cliente(185979521, "Conta Poupança", 25994, "Lonnie Verheijden");
let cliente9 = new Cliente(3151956165, "Conta Corrente", 7601, "Alonso Wannan");
let cliente10 = new Cliente(2138105881, "Conta Poupança", 33196,"Bendite Huggett");


// console.log(cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10)


let clientes = {
    cliente1,
    cliente2,
    cliente3,
    cliente4,
    cliente5,
    cliente6,
    cliente7,
    cliente8,
    cliente9,
    cliente10
}

// console.log(clientes)

let banco = {
    clientes,

    consultarCliente: function(titular) {
        for(let i = 0; i < clientes.length; i++) {
            if(clientes.titular == titular) {
                console.log("Existe!")

            } else  {
                console.log("Não existe")
            }
        }
        
    }
}

console.log(clientes.cliente1.titular)

console.log(banco.consultarCliente("Abigael Natte"))


