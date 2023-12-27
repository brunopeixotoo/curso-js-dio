/* EXERCÍCIO: CÁLCULO DE MÉDIA
*
* O arquivo ex14 e ex15 irão fazer a conexão de exportação entre eles.
*
* O objeivo da atividade é praticar o uso do gets e print.
* O programa irá receber a média do aluno e retornar se foi
* "Reprovado", "Recuperação" ou "Aprovado".
*
*
* @author Bruno R.
* @version 1.0
* @JavaScript
 */

const notasAluno = [7, 4, 9, 8];
let i = 0; 

function gets() {
    notas = notasAluno[i];
    i++;
    return notas;
}

function print(texto) {
   console.log(texto);
}

module.exports = { gets, print };