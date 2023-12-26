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

const { gets, print } = require('./ex12');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);

}

let maiorNumero = 0;

for (let i = 0; i <= numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado;
    }
    
}

console.log(maiorNumero);