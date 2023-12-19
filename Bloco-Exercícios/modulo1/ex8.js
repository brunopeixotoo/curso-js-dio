/*EXERCÍCIO 08: CRIANDO A CLASSE CARRO
*
* O porgrama tem como finalidade exercitar
* a programação orientada a objeto (P.O.O)
* O porgrama foi desenvolvido para criar Objetos Carros e calcular o gasto por percurso.
*
* @author Bruno
* @version 1.0
* @JavaScript
 */

class Carros {
    marca;
    cor;
    gasolinaPorKM;
    
    constructor(marca, cor, gasolinaPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaPorKM = gasolinaPorKM;
    }

    gasto(distancia, precoCombustivel) {
        return distancia * this.gasolinaPorKM * precoCombustivel;

    }
} 

const fiat = new Carros('Fiat', 'Azul', 1/5);
console.log(fiat.gasto(100, 6));

const chevrolet = new Carros('Chevrolet','Vermelho', 1/4);
console.log(chevrolet.gasto(90, 6));



