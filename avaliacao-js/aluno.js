function Aluno(nome, faltas, notas) {
    this.nome = nome,
    this.faltas = faltas,
    this.notas = notas,
    this.calcularMedia = function calcularMedia() {

        let media = 0;
        for (let index = 0; index < this.notas.length; index++) {
            media += this.notas[index];        

        }
        return (media/this.notas.length)

    };

    this.faltas = function faltas() {
        return this.faltas++
        
    }
};

module.exports = Aluno; 