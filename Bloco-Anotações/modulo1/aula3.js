// FUNÇÕES 

// CALCULANDO VALOR AO QUADRADO

/*function quadrado(numero) {
    return numero*numero;
}

const valorAoQuadrado = quadrado(27);
console.log(valorAoQuadrado); */

// CALCULANDO VALOR JUROS

/*function valorJuros(valor, percentual) {
    const calculo = (percentual/100)* valor;
    return calculo + valor;
}

let calculoDeJuros = valorJuros(78, 10);
console.log(calculoDeJuros); */


// CALCULANDO IMC 

function imc (peso, altura) {
    const calculoImc = peso / Math.pow(altura, 2);
     return calculoImc;
 }

function classificacaoImc(valorDoImc) {
    if (valorDoImc < 18.5) {
        return 'Abaixo do peso.';
    } else if (valorDoImc >= 18.5 && valorDoImc < 25) {
        return 'Peso normal.';
    } else if (valorDoImc >= 25 && valorDoImc < 30) {
        return 'Acima do peso.';
    } else if (valorDoImc >= 30 && valorDoImc < 40) {
        return 'Obesidade.';
    } else {
        return 'Obesidade grave.';
    }
}
const valorDoImc = imc(57, 1.63);
console.log('O valor do IMC foi de '+ valorDoImc +' e a classificação foi: '+ classificacaoImc(valorDoImc));
