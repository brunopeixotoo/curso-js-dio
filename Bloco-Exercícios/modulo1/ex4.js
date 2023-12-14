/* Calculando IMC
*
* Programa feito para cálculo de Índice de Massa Corporal(IMC)
*
*
* @author Bruno Rodrigues Peixoto
* @version 1.0
* @JavaScript
 */

const altura = 1.63;
let peso = 57;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('Abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso.');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade.');
} else {
    console.log('Obesidade grave.');
}