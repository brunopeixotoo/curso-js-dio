/* EXERCÍCIO: CALCULANDO PREÇO
*
* 
* O programa tem como objetivo calcular o desconto ou o juros
* de acordo com a forma de pagamento.
*
* TABELA:
* 1 - desconto de 10%
* 2 - desconto de 15%
* 3 - preço normal
* 4 - juros de 10%
*
* @author Bruno Rodrigues Peixoto
* @version 1.0
* @JavaScript
*/

function aplicarDesconto(preco, formaDePgamento) {
    if (formaDePgamento === 1) {
        valor = preco - (preco*0.1);
        return 'Preço: R$'+ valor;
    } else if (formaDePgamento === 2) {
        valor = preco - (preco*0.15);
        return 'Preço: R$'+ valor;
    } else if (formaDePgamento === 3) {
        return 'Preço: R$'+ preco;
    } else if (formaDePgamento === 4) {
        valor = (preco*0.1) + preco;
        return 'Preço: R$'+ valor;
    } else {
        return 'Forma de pagamento inválida!'
    }
}

const compra = aplicarDesconto(56, 4);
console.log(compra);