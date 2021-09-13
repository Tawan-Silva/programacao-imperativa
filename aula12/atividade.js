const alice = [10, 19, 34];
const bob = [11, 17, 32];

var pontosPrimeiroParticipante = 0;
var pontosSegundoParticipante = 0

function encontrarGanhador(alice, bob, pontosPrimeiroParticipante, pontosSegundoParticipante, ganhador1) {
    pontosPrimeiroParticipante = 0;
    pontosSegundoParticipante = 0
    for (var i = 0; i < alice.length && bob.length; i++) {
        if (alice[i] > bob[i]) {
            pontosPrimeiroParticipante + 1;
            console.log("Alice Recebeu 1 ponto")

        } else if (bob[i] < alice[i]) {
            pontosPrimeiroParticipante + 1
            console.log("Alice Recebeu 1 ponto")
        } else if (alice[i] < bob[i]) {
            pontosSegundoParticipante + 1
            console.log("Bob Recebeu 1 ponto")

        } else if (bob[i] > alice[i]) {
            pontosSegundoParticipante + 1
            console.log("Bob Recebeu 1 ponto")

        } else if (alice[i] = bob[i]) {
            console.log("Ninguem recebeu 1 ponto!!")

        }

    }

}



console.log(encontrarGanhador(alice, bob))