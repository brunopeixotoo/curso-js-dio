/* EXERCÍCIO: MAIOR NÚMERO SORTEADO
*
*
* Atividade para desenvolver o uso de funções auxiliares.
* O programa do arquivo "ex12.js" vai trabalhar como auxílio
* do arquivo "ex13.js" para saber qual  maior número sorteado.
*
*
*
* @author Bruno R.
* @VERSION 1.0
* @JavaScript
 */


const numeroAlunos = [45, 34, 97, 13, 73];
let i = 0;

function gets() {
    const valor = numeroAlunos[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };