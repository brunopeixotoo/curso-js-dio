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

const { gets, print } = require ('./ex14');

const notasDoAluno = [];

for (let i = 0; i < 4; i++) {
    const notasAluno = gets();
    notasDoAluno.push(notasAluno);
    
}

console.log(notasDoAluno);


function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < 4; i++) {
        let nota = notas[i];
        soma = soma + nota;
    }

    let media = soma/notas.length;

    if (media >= 7) {
        return"Aprovado"
    } else if (media >= 6 && media < 7 ) {
        return "Recuperação"
    } else {
        return"Reprovado";
    }

}

const verificarMedia = calcularMedia(notasDoAluno);
console.log(verificarMedia);