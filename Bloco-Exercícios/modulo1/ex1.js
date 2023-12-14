/* Cálculo de Valor de Uma Viagem
*
*
* O obtetivo do programa é calcular o valor gasto de combustível para viagem.
* Como o código é simples, a opção foi por deixar o preço do combustível como uma constante.
* 
*
* @author: Bruno Rodrigues Peixoto
* @version 1.0
* @JavaScript
*/

const precoCombustivel = 5.79;
let gastoMedioCombustivelPorKm = 10;
let distanciaKM = 100;

//Calculando o gasto de gasolina do carro por KM.
const quantidadeDeCombustivel = precoCombustivel/gastoMedioCombustivelPorKm;

//Calculando valor que será preciso de gasolina.
const valorNecessario = quantidadeDeCombustivel*distanciaKM;

//Output do valor.
console.log(valorNecessario);


