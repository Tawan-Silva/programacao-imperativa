let dadoEntrada = {
    nome:"Christopher",
    profissao:"Programador",
    idade:25,
    linguagens:["PHP","Javascript","Dart"],
    disponibilidadeParaViajar:true,
    "ramoProfissional": {
        anosDeExperiencia: 12,
        nivel: "Senior",
        areaPrincipal: "TI"
    },
    maisUm: "TESTE",

    saudacao: function() {
        return "Olá mundo";
    },

    calculo: function() {
        return this.idade - this.ramoProfissional.anosDeExperiencia;
    }
}

console.log(dadoEntrada);
console.log(dadoEntrada.ramoProfissional.anosDeExperiencia);
console.log(dadoEntrada.calculo());