# FORMAS DE CRIAÇÃO DE OBJETOS LITERAIS COM PROTÓTIPOS

~~~JavaScript

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

~~~

- Criando objetos literais

~~~JavaScript

const pessoa = {
    genero: 'masculino'
}


const nomeUsuario = {
    nome: 'Seu nome',
    __proto__: pessoa
}

console.log(nomeUsuario.genero)

~~~

- Criando um objeto como se estivesse instanciando.

~~~JavaScript

const pessoa = {
    genero: 'masculino'
}

const nomeUsuario = Object.create(pessoa)

nomeUsuario.nome = 'Seu nome'

console.log(nomeUsuario.genero)

~~~

