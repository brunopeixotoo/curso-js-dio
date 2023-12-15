/* EXERCÍCIO: VERIFICANDO IDADE
*
* 
* O porgrama tem como objetivo análisar a idade do usuário
* e verificar se é maior ou menor de idade esse usuário.
*
*
*
* @author Bruno Rodrigues Peixoto
* @version 1.0
* @JavaScript
*/

function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Você é maior de idade.';
    } else {
        return 'Você é menor de idade.';
    }
}

const idadeUsuario = verificarIdade(19);
console.log(idadeUsuario);