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
let maiorNumero = 0;

function gets() {

    for (let i = numeroAlunos[0]; i <= numeroAlunos[4]; i++) {
       
        if (numeroAlunos[i] > maiorNumero) {
            let maiorNumero = numeroAlunos[i];
            return maiorNumero;
        } else {
            continue
        }
        
    }

}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };