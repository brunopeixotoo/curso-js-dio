/* EXERCÍCIO: CRIANDO A CLASSE PESSOA
*
*
* O exercício tem como objetivo treinar P.O.O
* O programa deve criar Objetos Pessoas e calcular o IMC e classificar o mesmo.
*
*
*
* @author Bruno
* @version 1.0
* @JavaScript
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        const imc = this.peso / (this.altura*this.altura);
        return imc;
    }

    classificacaoImc() {
        const imc = this.calculoImc();

        if (imc < 18.5) {
            return 'Abaixo do peso.';
        }else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal.';
        }else if (imc >= 25 && imc < 30) {
            return 'Acima do peso.';
        } else if (imc >= 30 && imc < 40) {
            return 'Obesidade.';
        } else {
            return 'Obesidade grave.';
        }
    }
}

const tonystark = new Pessoas('Tony', 57, 1.63);

console.log('Nome: '+ tonystark.nome +' / Peso: '+ tonystark.peso +'Kg / Altura: '+ tonystark.altura +'m');
console.log('Valor do IMC: '+ tonystark.calculoImc());
console.log('Classificação do IMC: '+ (tonystark.classificacaoImc()));
