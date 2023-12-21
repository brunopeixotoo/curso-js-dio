/* EXERCÍCIO: APENAS VALORES PARES
*
*
* Exercício para treinar a prática de estrutura de repetições (FOR)
* O programa tem como objetivo fazer a identificação de valores pares e imprimir.
*
* @author Bruno
* @version 1.0
* @JavaScript
*/

const contagemMaxima = 67;

for (let i = 0; i <= contagemMaxima; i++) {
    if (i % 2 ==  0 ) {
        console.log(i);
    } else {
        continue
    }
}