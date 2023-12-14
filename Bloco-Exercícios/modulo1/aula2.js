/* Incremento do Cálculo de Valor de Uma Viagem
*
* O programa vai calcular o valor gasto de Etanol ou Gasolina de acordo com a preferência do usuário.
* Programa desenvolvido para treinar condições e a sintax do JavaScript
*
*
* @author: Bruno Rodrigues Peixoto
* @version 1.0
* @javascript
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPOrLitros = 10;
const distanciaEmKm = 100;

const tipoCombustivel = 'Gasolina'


if (tipoCombustivel === 'Etanol') {
    const quantidadeDeCombustivelEtanol = precoEtanol/kmPOrLitros;
    const valorDeEtanolParaViagem = quantidadeDeCombustivelEtanol*distanciaEmKm;
    console.log(valorDeEtanolParaViagem);
} else if (tipoCombustivel === "Gasolina") {
    const quantidadeDeCombustivelGasolina = precoGasolina/kmPOrLitros;
    const valorDeGasolinaParaViagem = quantidadeDeCombustivelGasolina*distanciaEmKm;
    console.log(valorDeGasolinaParaViagem);
} else {
    console.log('Tipo de combustível inválido para o seu carro.')
}