/* Média de Notas
*
* O programa tem como objetivo receber as notas
* e dar uma resposta de acordo com a média das três notas.
*
* @author: Bruno Rodrigues Peixoto
* @version 1.0
* @JavaScript
*/

const notaUm = 50;
const notaDois = 85;
const notaTres = 67;

const mediaAluno = (notaUm + notaDois + notaTres)/3;

if (mediaAluno >= 70) {
    console.log("Aprovado!");
} else if (mediaAluno >= 50 && mediaAluno <= 69) {
    console.log("Recuperação");
} else {
    console.log("Reprovado!");
}