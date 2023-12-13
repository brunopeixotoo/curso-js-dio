// CONCEITO BOOLEANO E CONDICIONAIS


/*
* Verificando se o número da constante é par.
* Para isso, foi utilizado as condições.
* O valor do output será booleano.
*/
const numero = 0;
eNumeroPar = (numero % 2) == 0;
//console.log(eNumeroPar);


if (numero == 0) {
    console.log("Este valor é inválido.");
} else if (eNumeroPar) {
    console.log("Este é um número par.");
} else {
    console.log("Este é um número ímpar.");
}

console.log("Fim do programa");