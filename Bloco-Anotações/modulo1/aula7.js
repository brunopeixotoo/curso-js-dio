// ENTENDENDO ESTRUTURAS DE REPETIÇÃO

const notas = [6, 5, 7, 9, 10];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma/notas.length;
console.log('Média: '+ media);
