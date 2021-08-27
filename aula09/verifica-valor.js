function verificaValor(ValorA, ValorB) {
    if(ValorA > ValorB) {
        console.log(ValorA + " é maior " + ValorB + " é menor")

    } else if(ValorB > ValorA) {
        console.log(ValorB + " é maior " + ValorA + " é menor")

    } else if (ValorA == ValorB) {
        console.log(ValorA + " é igual a " + ValorB );

    } else {
        console.log("Inválido");
    }
}

verificaValor(1151, 1151);