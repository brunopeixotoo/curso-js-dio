/* EXERCÍCIO: MAIOR  PAR E MENOR ÍMPAR
*
* O arquivo ex16 e ex17 irão fazer a conexão de exportação entre eles.
*
* O objeivo da atividade é praticar o uso do gets e print.
* O programa tem como objetivo separar e retornar o maior valor par
* e o menor valor ímpar.
*
*
* @author Bruno R.
* @version 1.0
* @JavaScript
 */

const { gets, print } = require ('./ex16');

const lista = [];

for (let i = 0; i < 5; i++) {
    const valores = gets();
    lista.push(valores);
}

function maiorPar(listaNumeros) {
    
    let maiorValorPar = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        let numeroPar = listaNumeros[i];
        if ( numeroPar % 2 == 0 && numeroPar > maiorValorPar) {
            maiorValorPar = numeroPar;
        }
        
    }
    return maiorValorPar;
    
}
function menorImpar(listaNumeros) {
    
    let menorValorImpar = Infinity;
    for (let i = 0; i < listaNumeros.length; i++) {
        let numeroImpar = listaNumeros[i];
        if (numeroImpar % 2 !== 0 && numeroImpar < menorValorImpar) {
            menorValorImpar = numeroImpar;
        }
        
    }
    return menorValorImpar;
}

const resultado1 = maiorPar(lista);
console.log(resultado1);
const resultado2 = menorImpar(lista);
console.log(resultado2);
