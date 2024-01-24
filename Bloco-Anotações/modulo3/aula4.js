
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

const nomeUsuario = new Pessoa('Seu nome', 0)
console.log(nomeUsuario)

nomeUsuario.falar()