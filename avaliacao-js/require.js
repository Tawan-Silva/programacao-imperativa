const fs = require('fs');
const Aluno = require('./aluno');
const estudantes = require('./estudantes')

const curso = {

    curso: 'Front-End',
    notaAprovacao: 8,
    faltasMaximas: 10,
    lista: estudantes,
    adicionarAluno(aluno) {
        this.lista.push(aluno)

    },


    verificandoAprovados(aluno) {
        
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            console.log("Aprovado");
            return true;

        } else if (aluno.faltas === this.faltasMaximas && aluno.calcularMedia() > (this.notaAprovacao + (this.notaAprovacao * 7)/ 100)) {
            console.log("Aprovado");
            return true;

        } else {
            console.log("Reprovadoo!");
            return false;
        };
    },
}


curso.lista[2].faltas()
console.log(curso.lista);
console.log(curso.verificandoAprovados(curso.lista[1])); 