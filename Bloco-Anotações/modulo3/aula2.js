const pessoa = {
    idade: 18
}

const nomeUsuario = {
    nome: 'Seu nome',
    __proto__: pessoa
}

console.log(nomeUsuario.idade)