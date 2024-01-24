# ORIENTAÇÃO A PROTÓTIPO 


    - O protótipo seria uma base para o objeto.

        O objeto 'renan' foi solicitado em 'renan.genero', mas é possível verificar que não consta o genero como chave:valor. A partir disso, o protótipo será solicitado, ou seja, o programa irá percorrer outros objetos até encontar uma chave:valor com a resposta para o 'genero'. É uma forma de fazer heranças.


~~~JavaScript

const pessoa = {
    genero = 'masculino'
}

const nomeUsuario = {
    nome: 'Seu nome',
    idade: 0,
    __proto__: pessoa
}

console.log(nomeUsuario.genero)
~~~


- SEMPRE que uma função tem seu nome identificador começando com uma letra maiúscula, significa que ela é uma function construtora.

    - Diferentemente de outras linguagens, como Java, no JS as classes não são necessariamente classes, mas sim functions construtoras e protótipos.

~~~JavaScript

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const nomeUsuario = new Pessoa('Seu nome', 0)

console.log(nomeUsuario)
~~~


- Caso queira criar um método:


~~~JavaScript

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

renan.falar()

~~~