# ENTENDENDO ESTRUTURAS DE REPETIÇÃO

    - Estrutura "FOR"

~~~JavaScript

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

~~~
<!-- # PERCORRENDO UMA ARRAY COM O FOR -->


    - Vejamos como percorrer uma lista de notas e somar os itens dessa lista e no final calcular a média.

~~~JavaScript

const notas = [6, 5, 7, 9, 10];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma/notas.length;
console.log('Média: '+ media);

~~~